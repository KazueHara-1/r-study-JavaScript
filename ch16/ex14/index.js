import { Worker } from "worker_threads";
import fs from "fs";
import path from "path";

const readImage = (filePath) => {
  return fs.promises.readFile(filePath);
};

const saveImage = (filePath, data) => {
  return fs.promises.writeFile(filePath, data);
};

const processImage = (imageBuffer) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    worker.postMessage(imageBuffer);

    worker.on("message", resolve);
    worker.on("error", reject);
  });
};

const main = async () => {
  try {
    const inputPath = path.resolve("input.png");
    const outputPath = path.resolve("output.png");

    const imageBuffer = await readImage(inputPath);
    const processedImage = await processImage(imageBuffer);

    await saveImage(outputPath, processedImage);

    console.log("画像の処理が完了しました。");
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
};

main();
