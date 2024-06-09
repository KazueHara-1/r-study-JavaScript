import { readdir, stat } from "./index.js";

describe("readdir test", () => {
  test("正常系", () => {
    readdir("./ch13/ex03").then((dir) =>
      expect(dir).toStrictEqual(["index.js", "index.test.js"])
    );
  });
  test("異常系", () => {
    expect(readdir("./ch13/ex333")).rejects.toThrow();
  });
});

describe("stat test", () => {
  test("正常系", () => {
    stat("./ch13/ex03").then((stat) => {
      expect(stat.isDirectory()).toBe(true);
    });
  });
  test("正常系", () => {
    stat("./ch13/ex03/index.js").then((stat) => {
      expect(stat.isDirectory()).toBe(false);
    });
  });
  test("異常系", () => {
    expect(stat("./ch13/ex333")).rejects.toThrow();
  });
});
