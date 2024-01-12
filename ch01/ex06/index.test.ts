import { fib } from "./index.ts";

describe("math", () => {
  describe("fib", () => {
    it("fib(1) returns 1", () => {
      expect(fib(1)).toBe(1);
    });

    it("fib(2) returns 1", () => {
      expect(fib(2)).toBe(1);
    });

    it("fib(5) returns 5", () => {
      expect(fib(5)).toBe(5);
    });

    it("fib(50) returns 12586269025", () => {
      expect(fib(50)).toBe(12586269025);
    });

    it("throw error when negative value given", () => {
      expect(() => fib(-1)).toThrow(new Error("input must be positive value."));
    });

    it("returns same value when positive value given", () => {
      expect(() => fib(1.5)).toThrow(new Error("input value must be integer."));
    });
  });
});
