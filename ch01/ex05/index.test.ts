import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns value when positive value given", () => {
      expect(sum(1, 2)).toBe(3);
    });

    it("returns minus value when the sum is minus", () => {
      expect(sum(4, -5)).toBe(-1);
    });

    it("returns zero value when zero and zero given", () => {
      expect(sum(0, 0)).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns value when positive value given", () => {
      expect(factorial(5)).toBe(120);
    });

    it("returns 1 when 1 given", () => {
      expect(factorial(1)).toBe(1);
    });

    it("returns 1 when 0 given", () => {
      expect(factorial(0)).toBe(1);
    });

    it("throw error when negative value given", () => {
      expect(() => factorial(-1)).toThrow(
        new Error("input must be positive value.")
      );
    });

    it("returns same value when positive value given", () => {
      expect(() => factorial(1.5)).toThrow(
        new Error("input value must be integer.")
      );
    });
  });
});
