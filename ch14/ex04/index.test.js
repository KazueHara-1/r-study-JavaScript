import { Hiragana } from "./index.js";

test("ひらがな一文字", () => {
  const h = new Hiragana("あ");
  expect(h + "").toBe("あ");
  expect(-h).toBe(-12354);
  expect(+h).toBe(12354);
});

test("濁音", () => {
  const h = new Hiragana("が");
  expect(h + "").toBe("が");
  expect(-h).toBe(-12364);
  expect(+h).toBe(12364);
});

test("半濁音", () => {
  const h = new Hiragana("ぱ");
  expect(h + "").toBe("ぱ");
  expect(-h).toBe(-12401);
  expect(+h).toBe(12401);
});
