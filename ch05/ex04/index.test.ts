import { fibDoWhile, fibFor, fibWhile } from "./index.ts";

describe("フィボナッチテスト", () => {
  const FIB = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  test("while文", () => {
    expect(fibWhile()).toStrictEqual(FIB);
  });
  test("do/while文", () => {
    expect(fibDoWhile()).toStrictEqual(FIB);
  });
  test("for文", () => {
    expect(fibFor()).toStrictEqual(FIB);
  });
});
