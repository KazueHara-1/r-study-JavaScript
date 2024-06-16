import * as fsPromises from "node:fs/promises";

export async function fetchSumOfFileSizes(path, callback) {
  try {
    const files = await fsPromises.readdir(path);
    const promises = files.map((file) =>
      fsPromises.stat([path, file].join("/"))
    );
    const stats = await Promise.all(promises);
    const total = stats.reduce((sum, stat) => sum + stat.size, 0);
    callback(null, total);
  } catch (err) {
    callback(err);
    return;
  }
}
