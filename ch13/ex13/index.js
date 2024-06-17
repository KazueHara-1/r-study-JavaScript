import * as fs from "fs";

export async function* walk(rootPath) {
  try {
    const files = await fs.promises.readdir(rootPath, {
      withFileTypes: true,
    });
    const List = [];
    for (const file of files) {
      const info = {
        path: `${rootPath}/${file.name}`,
        isDirectory: file.isDirectory(),
      };
      List.push(info);
      if (info.isDirectory) {
        for await (const subInfo of walk(info.path)) {
          List.push(...subInfo);
        }
      }
    }
    yield List;
  } catch (err) {
    console.error("Cannot find such file or directory.", err);
  }
}
