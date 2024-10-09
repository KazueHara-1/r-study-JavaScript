import { createServer } from "net";

// 参考: https://gist.github.com/iamssen/77e7687f9d0827ef50fd8ff1136ac8f0

const html = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <form action="/greeting" method="POST">
      <label for="greeting">Name:</label>
      <input type="text" id="name" name="name" />
      <input type="text" id="greeting" name="greeting" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`;

const namedHtml = (name, greeting) => `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    ${greeting}, ${name} !
  </body>
</html>`;

const NotFound = `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404</title>
  </head>
  <body>
    <h1>404 Not Found</h1>
  </body>
</html>`;

const server = createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    const request = data.toString();

    if (request.startsWith("GET / ")) {
      const response = [
        "HTTP/1.1 200 OK",
        "Content-Type: text/html",
        "Status: 200",
        `Content-Length: ${Buffer.byteLength(html)}`,
        "",
        html,
        "",
        "",
      ].join("\r\n");

      socket.write(response);
    } else if (
      request.startsWith("POST") &&
      request.substring(5).startsWith("/greeting ")
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_headers, body] = request.split("\r\n\r\n");
      const params = new URLSearchParams(body);
      const named = namedHtml(params.get("name"), params.get("greeting"));
      const response = [
        "HTTP/1.1 200 OK",
        "Content-Type: text/html",
        "Status: 200",
        `Content-Length: ${Buffer.byteLength(named)}`,
        "",
        named,
        "",
        "",
      ].join("\r\n");
      socket.write(response);
    } else {
      const response = [
        "HTTP/1.1 404 Not Found",
        "Content-Type: text/html",
        "Status: 404",
        "",
        "",
        NotFound,
        "",
        "",
      ].join("\r\n");
      socket.write(response);
    }

    socket.end();
  });
});

server.listen(3000, () => console.log("Server is created on port 3000."));
