import { loggingProxy } from "./index.js";

test("loggingProxy", () => {
  const mockDate = "2024-01-01T00:00:00.000Z";
  jest.spyOn(Date, "now").mockImplementation(() => mockDate);
  const obj = {
    sum(a, b) {
      return a + b;
    },
  };

  const { proxy, array } = loggingProxy(obj);

  expect(proxy.sum(10, 20)).toBe(30);
  expect(proxy.sum(15, 25)).toBe(40);
  expect(array).toStrictEqual([
    {
      methodName: "sum",
      param: [10, 20],
      timestamp: "2024-01-01T00:00:00.000Z",
    },
    {
      methodName: "sum",
      param: [15, 25],
      timestamp: "2024-01-01T00:00:00.000Z",
    },
  ]);
});
