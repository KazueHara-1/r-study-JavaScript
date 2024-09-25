onmessage = function (message) {
  const { tile, x0, y0, perPixel, maxIterations } = message.data;
  const { width, height } = tile;
  const imageData = new ImageData(width, height);
  const iterations = new Uint32Array(imageData.data.buffer);

  // フラクタルのギャスケットを生成する処理
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let i = 0;
      let dx = x0 + x * perPixel;
      let dy = y0 + y * perPixel;

      while (i < 1) {
        if ((dx % 3 === 1 && dy % 3 === 1) || (dx % 3 === 2 && dy % 3 === 2)) {
          break;
        }
        dx = Math.floor(dx / 3);
        dy = Math.floor(dy / 3);
        i++;
      }

      iterations[y * width + x] = i;
    }
  }

  const min = Math.min(...iterations);
  const max = Math.max(...iterations);

  postMessage({ tile, imageData, min, max }, [imageData.data.buffer]);
};
