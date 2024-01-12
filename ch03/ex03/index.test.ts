// (0.3 - 0.2, 0.1) -> true
// (0.2 - 0.1, 0.1) -> true

import { checkNumberEquivalence } from "./index.ts";

describe("同値性判定", () => {
  it("0.3 - 0.2, 0.1 -> true", () => {
    expect(checkNumberEquivalence(0.3 - 0.2, 0.1)).toBe(true);
  });
  it("0.2 - 0.1, 0.1 -> true", () => {
    expect(checkNumberEquivalence(0.2 - 0.1, 0.1)).toBe(true);
  });
});
