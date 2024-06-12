import {
  g1,
  g2,
  g3,
  g4,
  g1_before,
  g2_before,
  g3_before,
  g4_before,
} from "./index.js";

const spyConsoleLog = jest.spyOn(global.console, "log").mockImplementation();
beforeEach(() => {
  jest.clearAllMocks();
});

describe("g1() test", () => {
  test("変更前のコードと同じかどうか", async () => {
    await g1_before();
    expect(spyConsoleLog).toHaveBeenNthCalledWith(1, "A");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(2, "B");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(3, "C");
    jest.clearAllMocks();
    expect(spyConsoleLog).not.toHaveBeenCalled();
    await g1();
    expect(spyConsoleLog).toHaveBeenNthCalledWith(1, "A");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(2, "B");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(3, "C");
  }, 150000);
});

describe("g2() test", () => {
  test("変更前のコードと同じかどうか", async () => {
    await g2_before();
    expect(spyConsoleLog).toHaveBeenNthCalledWith(1, "A");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(2, "B");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(3, "C");
    jest.clearAllMocks();
    expect(spyConsoleLog).not.toHaveBeenCalled();
    await g2();
    expect(spyConsoleLog).toHaveBeenNthCalledWith(1, "A");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(2, "B");
    expect(spyConsoleLog).toHaveBeenNthCalledWith(3, "C");
  }, 150000);
});

describe("g3() test", () => {
  test("変更前のコードと同じかどうか", async () => {
    await g3_before();
    expect(spyConsoleLog).toHaveBeenCalledWith("John has 2 friends!");
    jest.clearAllMocks();
    expect(spyConsoleLog).not.toHaveBeenCalled();
    await g3();
    expect(spyConsoleLog).toHaveBeenCalledWith("John has 2 friends!");
  });
});

describe("g4() test", () => {
  test("変更前のコードと同じかどうか", async () => {
    g4_before().then((resultBefore) => {
      expect(resultBefore).toBe(42);
    });
    g4().then((result) => {
      expect(result).toBe(42);
    });
  });
});
