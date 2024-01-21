import { add, div, mul, sub } from "./index.ts";

describe("addのテスト", () => {
  test.each([
    [2, 3, 4, 2, 6, 5],
    [2, 3, 1, 1, 3, 4],
    [-1, 1, -2, 2, -3, 3],
    [1, 1, 0, 1, 1, 2],
  ])("add(%i + %ii + %i + %ii) = %i + %ii", (a, b, c, d, ex1, ex2) => {
    const num1 = { r: a, i: b };
    const num2 = { r: c, i: d };
    const expected = { r: ex1, i: ex2 };
    expect(add(num1, num2)).toStrictEqual(expected);
  });
});

describe("subのテスト", () => {
  test.each([
    [2, 3, 4, 2, -2, 1],
    [2, 3, 1, 1, 1, 2],
    [-1, 1, -2, 2, 1, -1],
    [1, 1, 0, 1, 1, 0],
  ])("sub(%i + %ii + %i + %ii) = %i + %ii", (a, b, c, d, ex1, ex2) => {
    const num1 = { r: a, i: b };
    const num2 = { r: c, i: d };
    const expected = { r: ex1, i: ex2 };
    expect(sub(num1, num2)).toStrictEqual(expected);
  });
});

describe("mulのテスト", () => {
  test.each([
    [2, 3, 4, 2, 2, 16],
    [2, 3, 1, 1, -1, 5],
    [-1, 1, -2, 2, 0, -4],
    [1, 1, 0, 1, -1, 1],
  ])("mul(%i + %ii + %i + %ii) = %i + %ii", (a, b, c, d, ex1, ex2) => {
    const num1 = { r: a, i: b };
    const num2 = { r: c, i: d };
    const expected = { r: ex1, i: ex2 };
    expect(mul(num1, num2)).toStrictEqual(expected);
  });
});

describe("divのテスト", () => {
  test.each([
    [2, 3, 4, 2, 0.7, 0.4],
    [2, 3, 1, 1, 2.5, 0.5],
    [-1, 1, -2, 2, 0.5, 0],
    [1, 1, 0, 1, 1, -1],
  ])("div(%i + %ii + %i + %ii) = %f + %fi", (a, b, c, d, ex1, ex2) => {
    const num1 = { r: a, i: b };
    const num2 = { r: c, i: d };
    const expected = { r: ex1, i: ex2 };
    expect(div(num1, num2)).toStrictEqual(expected);
  });
});
