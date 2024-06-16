import { retryWithExponentialBackoff } from "./index";
import { jest } from "@jest/globals";

jest.useFakeTimers();
test("retryWithExponentialBackoff test", async () => {
  const func = async () => {
    return 42;
  };
  const result = await retryWithExponentialBackoff(func, 1);
  jest.runAllTimers();
  expect(result).toBe(42);
});
test("retryWithExponentialBackoff test 異常系", async () => {
  const errorFunc = async () => {
    throw new Error();
  };
  await expect(retryWithExponentialBackoff(errorFunc, 1)).rejects.toThrow();
}, 10000);
