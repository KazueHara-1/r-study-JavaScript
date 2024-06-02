import { walk } from "./index.js";

test("ch12を探索", () => {
  const w = walk("./ch12");
  expect(w.next().value).toStrictEqual([
    { path: "./ch12/ex01", isDirectory: true },
    { path: "./ch12/ex02", isDirectory: true },
    { path: "./ch12/ex03", isDirectory: true },
    { path: "./ch12/ex04", isDirectory: true },
    { path: "./ch12/ex05", isDirectory: true },
    { path: "./ch12/ex06", isDirectory: true },
    { path: "./ch12/README.md", isDirectory: false },
    { path: "./ch12/ex01/index.js", isDirectory: false },
    { path: "./ch12/ex02/index.js", isDirectory: false },
    { path: "./ch12/ex02/index.test.js", isDirectory: false },
    { path: "./ch12/ex03/index.js", isDirectory: false },
    { path: "./ch12/ex03/index.test.js", isDirectory: false },
    { path: "./ch12/ex04/index.js", isDirectory: false },
    { path: "./ch12/ex04/index.test.js", isDirectory: false },
    { path: "./ch12/ex05/index.js", isDirectory: false },
    { path: "./ch12/ex05/index.test.js", isDirectory: false },
    { path: "./ch12/ex05/test.txt", isDirectory: false },
    { path: "./ch12/ex06/index.js", isDirectory: false },
    { path: "./ch12/ex06/index.test.js", isDirectory: false },
  ]);
});

test("ch12/ex02を探索", () => {
  const w = walk("./ch12/ex02");
  expect(w.next().value).toStrictEqual([
    { path: "./ch12/ex02/index.js", isDirectory: false },
    { path: "./ch12/ex02/index.test.js", isDirectory: false },
  ]);
});
