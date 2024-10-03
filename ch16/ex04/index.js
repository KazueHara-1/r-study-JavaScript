import iconv from "iconv-lite";
import { createReadStream } from "node:fs";

const readStream = createReadStream("./ex04/hello.txt");

readStream.on("data", (chunk) => {
  const encoded = iconv.decode(chunk, "SJIS"); //文字列をShift_JISに変換
  console.log(encoded);
  return;
});
