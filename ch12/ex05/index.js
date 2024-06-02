import * as fs from "fs";

export function* getFileRowGen(filename) {
  const file = fs.openSync(filename, "r");
  const buffer = Buffer.alloc(1);
  try {
    let returnStr = "";
    while (fs.readSync(file, buffer) !== 0) {
      const str = buffer.toString("utf8");
      if (str !== "\n") {
        returnStr += str;
      } else {
        yield returnStr;
        returnStr = "";
      }
    }
    yield returnStr;
  } finally {
    fs.closeSync(file);
  }
}
