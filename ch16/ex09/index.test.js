import request from "supertest";
import app from "./index.js";

describe("/test/mirror", () => {
  test("/test/mirror", async () => {
    const response = await request(app)
      .get("/test/mirror")
      .send({ body: "sample request body" });
    expect(response.statusCode).toBe(200);
    // expect(response.body).toBe({ body: "sample request body" });
  });
  test("/sample.txt", async () => {
    const response = await request(app).get("/sample.txt");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("sample text");
  });
});
