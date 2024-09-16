self.addEventListener("message", (event) => {
  const { data, width, height } = event.data;
  const outputData = new Uint8ClampedArray(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const output = [1, 2, 3, 4]; // ここに値を足していく
    // 重み1
    const WEIGHT_1 = [
      i - (width * 2 + 2) * 4,
      i - (width * 2 - 2) * 4,
      i + (width * 2 + 2) * 4,
      i + (width * 2 - 2) * 4,
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
      i - (width * 2 + 1) * 4,
      i - (width * 2 - 1) * 4,
      i + (width * 2 + 1) * 4,
      i + (width * 2 - 1) * 4,
      i - (width - 2) * 4,
      i - (width + 2) * 4,
      i + (width - 2) * 4,
      i + (width + 2) * 4,
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
      i - width * 2 * 4,
      i + width * 2 * 4,
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
      i - (width + 1) * 4,
      i - (width - 1) * 4,
      i + (width + 1) * 4,
      i + (width - 1) * 4,
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
    const WEIGHT_24 = [i - width * 4, i + width * 4, i - 1 * 4, i + 1 * 4];
    WEIGHT_24.forEach((dataIndex) => {
      const WEIGHT = 24;
      if (dataIndex >= 0 && dataIndex < data.length) {
        output.forEach((o, index) => {
          output[index] += data[dataIndex + index] * WEIGHT;
        });
      }
    });
    const WEIGHT = 36;
    output.forEach((o, index) => (output[index] += data[i + index] * WEIGHT));

    outputData[i] = output[0] / 256;
    outputData[i + 1] = output[1] / 256;
    outputData[i + 2] = output[2] / 256;
    outputData[i + 3] = output[3] / 256;
  }

  self.postMessage(outputData);
});
