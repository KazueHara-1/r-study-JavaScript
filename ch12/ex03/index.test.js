import { counterGen } from "./index.js";

test("カウンターのテスト", () => {
  const counter = counterGen();
  expect(counter.next().value).toBe(1);
  expect(counter.next().value).toBe(2);
  expect(counter.next().value).toBe(3);
  expect(counter.next().value).toBe(4);
  expect(counter.next().value).toBe(5);
});

test("リセットテスト", () => {
  const counter = counterGen();
  expect(counter.next().value).toBe(1);
  expect(counter.next().value).toBe(2);
  expect(counter.next().value).toBe(3);
  expect(counter.next().value).toBe(4);
  expect(counter.next().value).toBe(5);
  counter.throw();
  expect(counter.next().value).toBe(1);
});
