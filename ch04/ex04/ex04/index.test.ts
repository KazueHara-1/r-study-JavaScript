import { bitCount } from "./index.ts";

describe("bitCountのテスト", () => {
  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [15, 4],
    [16, 1],
    [0b111, 3],
    [0b1111111111111111111111111111111, 31],
  ])("bitCount(%i) = %i", (num, expected) => {
    expect(bitCount(num)).toBe(expected);
  });
});
