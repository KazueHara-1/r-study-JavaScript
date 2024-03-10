import { JsonPerse } from "./index.ts";

test("正常系", () => {
  const resp = JsonPerse('{"a":1,"b":2,"c":3}');
  expect(resp.success).toBe(true);
  expect(resp.data).toStrictEqual({ a: 1, b: 2, c: 3 });
});

test("異常系", () => {
  const resp = JsonPerse("abcde");
  expect(resp.success).toBe(false);
});
