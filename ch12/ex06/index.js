import * as fs from "fs";

export function* walk(rootPath) {
  try {
    const files = fs.readdirSync(rootPath, {
      withFileTypes: true,
    });
    const List = [];
    const fileInfo = files.map((file) => {
      return {
        path: `${rootPath}/${file.name}`,
        isDirectory: file.isDirectory(),
      };
    });
    List.push(...fileInfo);
    fileInfo.map((info) => {
      if (info.isDirectory) {
        const w = walk(info.path);
        List.push(...w.next().value);
      }
    });
    yield List;
  } catch (err) {
    console.error("Cannot find such file or directory.", err);
  }
}
