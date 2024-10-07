import { stat } from "node:fs/promises";

export const checkEntry = async (path) => {
  try {
    console.log(stat);
    const stats = await stat(path);
    if (stats.isFile()) {
      return "file";
    }
    if (stats.isDirectory()) {
      return "directory";
    }
  } catch (error) {
    return error;
  }
};
