// 後で見直す
// 基本的な部分は同じ
// 初めにワーカーを用意してワーカーへ（画像の縦横サイズも一緒に）画像を渡す

const threads = require("worker_threads");
const fs = require("fs");

if (threads.isMainThread) {
  fs.readFile(__dirname + "/input.png", function (err, data) {
    if (err) throw err;

    const bufferLength = Math.ceil(data.byteLength / 4) * 4;
    const sharedBuffer = new SharedArrayBuffer(bufferLength);
    const sharedArray = new Int32Array(sharedBuffer);

    new Uint8Array(sharedBuffer).set(new Uint8Array(data.buffer));

    const worker = new threads.Worker(__filename, { workerData: sharedArray });

    worker.on("online", () => {
      worker.on("message", (message) => {
        if (message === "done") {
          const outputArray = new Uint8Array(sharedBuffer);
          fs.writeFile(__dirname + "/output.png", outputArray, (err) => {
            if (err) throw err;
            console.log("画像が保存されました");
          });
        }
      });
    });
  });
} else {
  const sharedArray = threads.workerData;
  //   threads.parentPort.postMessage("done");

  const outputData = new Uint8ClampedArray(sharedArray.length);

  // TODO: ここで imageData.data を参照して outputData に結果を格納
  for (let i = 0; i < outputData.length; i += 4) {
    const output = [1, 2, 3, 4]; // ここに値を足していく
    // 重み1
    const WEIGHT_1 = [
      i - (outputData.width * 2 + 2) * 4,
      i - (outputData.width * 2 - 2) * 4,
      i + (outputData.width * 2 + 2) * 4,
      i + (outputData.width * 2 - 2) * 4,
    ];
    WEIGHT_1.forEach((dataIndex) => {
      const WEIGHT = 1;
      if (dataIndex >= 0 && dataIndex < outputData.length) {
        output.forEach((o, index) => {
          output[index] += outputData[dataIndex + index] * WEIGHT;
        });
      }
    });
    // 重み4
    const WEIGHT_4 = [
      i - (outputData.width * 2 + 1) * 4,
      i - (outputData.width * 2 - 1) * 4,
      i + (outputData.width * 2 + 1) * 4,
      i + (outputData.width * 2 - 1) * 4,
      i - (outputData.width - 2) * 4,
      i - (outputData.width + 2) * 4,
      i + (outputData.width - 2) * 4,
      i + (outputData.width + 2) * 4,
    ];
    WEIGHT_4.forEach((dataIndex) => {
      const WEIGHT = 4;
      if (dataIndex >= 0 && dataIndex < outputData.length) {
        output.forEach((o, index) => {
          output[index] += outputData[dataIndex + index] * WEIGHT;
        });
      }
    });
    // 重み6
    const WEIGHT_6 = [
      i - outputData.width * 2 * 4,
      i + outputData.width * 2 * 4,
      i + 2 * 4,
      i - 2 * 4,
    ];
    WEIGHT_6.forEach((dataIndex) => {
      const WEIGHT = 6;
      if (dataIndex >= 0 && dataIndex < outputData.length) {
        output.forEach((o, index) => {
          output[index] += outputData[dataIndex + index] * WEIGHT;
        });
      }
    });
    // 重み16
    const WEIGHT_16 = [
      i - (outputData.width + 1) * 4,
      i - (outputData.width - 1) * 4,
      i + (outputData.width + 1) * 4,
      i + (outputData.width - 1) * 4,
    ];
    WEIGHT_16.forEach((dataIndex) => {
      const WEIGHT = 16;
      if (dataIndex >= 0 && dataIndex < outputData.length) {
        output.forEach((o, index) => {
          output[index] += outputData[dataIndex + index] * WEIGHT;
        });
      }
    });
    // 重み24
    const WEIGHT_24 = [
      i - outputData.width * 4,
      i + outputData.width * 4,
      i - 1 * 4,
      i + 1 * 4,
    ];
    WEIGHT_24.forEach((dataIndex) => {
      const WEIGHT = 24;
      if (dataIndex >= 0 && dataIndex < outputData.length) {
        output.forEach((o, index) => {
          output[index] += outputData[dataIndex + index] * WEIGHT;
        });
      }
    });
    // 重み36
    const WEIGHT = 36;
    output.forEach(
      (o, index) => (output[index] += outputData[i + index] * WEIGHT)
    );

    outputData[i] = output[0] / 256;
    outputData[i + 1] = output[1] / 256;
    outputData[i + 2] = output[2] / 256;
    outputData[i + 3] = output[3] / 256;
  }
  threads.parentPort.postMessage("done");
}
