import fs from "fs";

// NOTE: file.txt の内容をアップロード
fetch("http://localhost:8000/bigFile.pdf", {
  method: "PUT",
  body: fs.createReadStream("bigFile.pdf"),
  duplex: "half",
});

// fetch("http://localhost:8000/bigFile.pdf", {
//   method: "PUT",
//   body: fs.readFileSync("bigFile.pdf"),
//   duplex: "half",
// });
