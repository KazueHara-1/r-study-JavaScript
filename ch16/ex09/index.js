import { resolve, extname } from "path"; // ファイルシステムのパス操作用。
import { createReadStream } from "fs"; // ファイル読み込み用。
import express from "express";
const app = express();

const server = app.listen(3000, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

// リクエストが「/test/mirror」の場合、リクエストをそのまま送り返す。
// リクエストのヘッダやボディを見たい場合に便利。
app.get("/test/mirror", function (request, response, next) {
  // レスポンスヘッダを設定する。
  response.setHeader("Content-Type", "text/plain; charset=UTF-8");
  // レスポンスのステータスコードを指定する。
  response.writeHead(200); // 200 OK
  // レスポンスボディの最初はリクエスト。
  response.write(
    `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`
  );
  // リクエストヘッダを出力する。
  const headers = request.rawHeaders;
  for (let i = 0; i < headers.length; i += 2) {
    response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
  }
  // ヘッダの末尾に空行を追加する。
  response.write("\r\n");

  // 次に、リクエストボディをレスポンスボディにコピーする必要がある。
  // 両方ともストリームなので、パイプを使うことができる。
  request.pipe(response);
});

// それ以外の場合は、ローカルディレクトリからファイルを提供する。
app.get("/:filename", function (request, response, next) {
  const rootDirectory = "~/tmp";
  // エンドポイントをローカルファイルシステムのファイルにマッピングする。
  let filename = request.params.filename;
  // パス中の「../」を禁止する。ルートディレクトリの外側のファイルを提供する
  // ことになり、セキュリティホールになるから。
  filename = filename.replace(/\.\.\//g, "");
  // 次に、相対パスを絶対パスに変換する。
  filename = resolve(rootDirectory, filename);
  // 拡張子に基づいて、ファイルのコンテンツタイプを推測する。
  let type;
  switch (extname(filename)) {
    case ".html":
    case ".htm":
      type = "text/html";
      break;
    case ".js":
      type = "text/javascript";
      break;
    case ".css":
      type = "text/css";
      break;
    case ".png":
      type = "image/png";
      break;
    case ".txt":
      type = "text/plain";
      break;
    default:
      type = "application/octet-stream";
      break;
  }
  const stream = createReadStream(filename);
  stream.once("readable", () => {
    // ストリームが読み込めるようになったら、Content-Typeヘッダと
    // 200 OKステータスを設定する。そして、ファイル読み出し
    // ストリームをレスポンスにパイプする。ストリームが終了すると、
    // パイプは自動的にresponse.end()を呼び出す。
    response.setHeader("Content-Type", type);
    response.writeHead(200);
    stream.pipe(response);
  });
  stream.on("error", (err) => {
    // ストリームを開こうとしてエラーが発生した場合、
    // そのファイルはおそらく存在しないか、読めないと思われる。
    // エラーメッセージをプレーンテキストで記述して、
    // 404 Not Foundレスポンスを送信する。
    response.setHeader("Content-Type", "text/plain; charset=UTF-8");
    response.writeHead(404);
    response.end(err.message);
  });
});
