import * as fsPromises from "node:fs/promises";

export async function fetchFirstFileSize(path, callback) {
  return await fsPromises
    .readdir(path)
    .then((files) => {
      if (files.length === 0) {
        callback(null, null);
        return;
      }
      fsPromises
        .stat([path, files[0]].join("/"))
        .then((stats) => callback(null, stats.size))
        .catch((err) => callback(err));
    })
    .catch((err) => callback(err));
}

export async function fetchSumOfFileSizes(path, callback) {
  try {
    const files = await fsPromises.readdir(path);
    let total = 0;
    const rest = [...files];

    const iter = async () => {
      if (rest.length === 0) {
        callback(null, total);
        return;
      }

      const next = rest.pop();
      const stats = await fsPromises.stat([path, next].join("/"));
      total += stats.size;
      await iter();
    };
    iter();
  } catch (err) {
    callback(err);
  }
}
