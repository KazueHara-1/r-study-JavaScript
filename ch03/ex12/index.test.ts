import { equals } from "./index.ts";

test("分割代入テスト", () => {
  const obj1 = { x: 1, y: 2 };
  const obj2 = { y: 2, x: 1 };
  expect(equals(obj1, obj2)).toBe(true);
});
