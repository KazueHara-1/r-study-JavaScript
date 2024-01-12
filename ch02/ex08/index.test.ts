import { addSemicolon, removeSemicolon } from "./index.ts";

describe("remove semicolon test", () => {
  test("a = b", () => {
    expect(removeSemicolon("a = b;")).toBe("a = b");
  });
  test(`a = b \n c=d`, () => {
    expect(removeSemicolon("a = b; \n c=d;")).toBe("a = b \n c=d");
  });
});

describe("add semicolon test", () => {
  test("a = b", () => {
    expect(addSemicolon("a = b")).toBe("a = b;");
  });
  test("a=b", () => {
    expect(addSemicolon("a=b")).toBe("a=b;");
  });
  test("a = b c=d", () => {
    expect(addSemicolon("a = b c=d")).toBe("a = b; c=d;");
  });
  test(`a = b \n c=d`, () => {
    expect(addSemicolon("a = b \n c=d")).toBe("a = b; \n c=d;");
  });
});
