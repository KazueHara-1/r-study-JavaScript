// 参考にしたもの: https://developer.mozilla.org/ja/docs/Web/API/ImageData/data
document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    // const outputData = new Uint8ClampedArray(imageData.data.length);
    //
    // // TODO: ここで imageData.data を参照して outputData に結果を格納
    //
    // const outputImageData = new ImageData(outputData, img.width, img.height);
    // filteredCtx.putImageData(outputImageData, 0, 0);
    // ```
    // 以下、RGBの時のコード
    // for (let i = 0; i < data.length; i += 4) {
    //   const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    //   data[i] = avg;
    //   data[i + 1] = avg;
    //   data[i + 2] = avg;
    // }

    // filteredCtx.putImageData(imageData, 0, 0);

    const outputData = new Uint8ClampedArray(imageData.data.length);

    // TODO: ここで imageData.data を参照して outputData に結果を格納
    for (let i = 0; i < data.length; i += 4) {
      const output = [1, 2, 3, 4]; // ここに値を足していく
      // 重み1
      const WEIGHT_1 = [
        i - (img.width * 2 + 2) * 4,
        i - (img.width * 2 - 2) * 4,
        i + (img.width * 2 + 2) * 4,
        i + (img.width * 2 - 2) * 4,
      ];
      WEIGHT_1.forEach((dataIndex) => {
        const WEIGHT = 1;
        if (dataIndex >= 0 && dataIndex < data.length) {
          output.forEach((o, index) => {
            output[index] += data[dataIndex + index] * WEIGHT;
          });
        }
      });
      // 重み4
      const WEIGHT_4 = [
        i - (img.width * 2 + 1) * 4,
        i - (img.width * 2 - 1) * 4,
        i + (img.width * 2 + 1) * 4,
        i + (img.width * 2 - 1) * 4,
        i - (img.width - 2) * 4,
        i - (img.width + 2) * 4,
        i + (img.width - 2) * 4,
        i + (img.width + 2) * 4,
      ];
      WEIGHT_4.forEach((dataIndex) => {
        const WEIGHT = 4;
        if (dataIndex >= 0 && dataIndex < data.length) {
          output.forEach((o, index) => {
            output[index] += data[dataIndex + index] * WEIGHT;
          });
        }
      });
      // 重み6
      const WEIGHT_6 = [
        i - img.width * 2 * 4,
        i + img.width * 2 * 4,
        i + 2 * 4,
        i - 2 * 4,
      ];
      WEIGHT_6.forEach((dataIndex) => {
        const WEIGHT = 6;
        if (dataIndex >= 0 && dataIndex < data.length) {
          output.forEach((o, index) => {
            output[index] += data[dataIndex + index] * WEIGHT;
          });
        }
      });
      // 重み16
      const WEIGHT_16 = [
        i - (img.width + 1) * 4,
        i - (img.width - 1) * 4,
        i + (img.width + 1) * 4,
        i + (img.width - 1) * 4,
      ];
      WEIGHT_16.forEach((dataIndex) => {
        const WEIGHT = 16;
        if (dataIndex >= 0 && dataIndex < data.length) {
          output.forEach((o, index) => {
            output[index] += data[dataIndex + index] * WEIGHT;
          });
        }
      });
      // 重み24
      const WEIGHT_24 = [
        i - img.width * 4,
        i + img.width * 4,
        i - 1 * 4,
        i + 1 * 4,
      ];
      WEIGHT_24.forEach((dataIndex) => {
        const WEIGHT = 24;
        if (dataIndex >= 0 && dataIndex < data.length) {
          output.forEach((o, index) => {
            output[index] += data[dataIndex + index] * WEIGHT;
          });
        }
      });
      // 重み36
      const WEIGHT = 36;
      output.forEach((o, index) => (output[index] += data[i + index] * WEIGHT));

      outputData[i] = output[0] / 256;
      outputData[i + 1] = output[1] / 256;
      outputData[i + 2] = output[2] / 256;
      outputData[i + 3] = output[3] / 256;
    }

    console.log(img.width, img.height);
    const outputImageData = new ImageData(outputData, img.width, img.height);

    console.log(outputImageData.data);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
