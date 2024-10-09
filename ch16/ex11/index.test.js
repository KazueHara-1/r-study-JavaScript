import { createConnection } from "net";

// ターミナルで node index.js を実行しておく

describe("Server Tests", () => {
  test("return the HTML form on GET /", (done) => {
    const client = createConnection({ port: 3000 }, () => {
      const request = ["GET / HTTP/1.1", "Host: localhost", "", ""].join(
        "\r\n"
      );
      client.write(request);
    });

    client.on("data", (data) => {
      expect(data.toString()).toContain(
        '<form action="/greeting" method="POST">'
      );
      client.end();
      done();
    });
  });

  test("return the greeting on POST /greeting", (done) => {
    const client = createConnection({ port: 3000 }, () => {
      const postData = "name=John&greeting=Hello";
      const request = [
        "POST /greeting HTTP/1.1",
        "Host: localhost",
        `Content-Length: ${postData.length}`,
        "",
        postData,
        "",
        "",
      ].join("\r\n");
      client.write(request);
    });

    client.on("data", (data) => {
      expect(data.toString()).toContain("Hello, John !");
      client.end();
      done();
    });
  });

  test("return 404 on unknown path", (done) => {
    const client = createConnection({ port: 3000 }, () => {
      const request = ["GETunknown / HTTP/1.1", "Host: localhost", "", ""].join(
        "\r\n"
      );
      client.write(request);
    });

    client.on("data", (data) => {
      expect(data.toString()).toContain("404 Not Found");
      client.end();
      done();
    });
  });
});
