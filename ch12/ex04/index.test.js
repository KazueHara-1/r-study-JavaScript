import { getPrimeGen } from "./index.js";

test("getPrimeGen test", () => {
  const getPrime = getPrimeGen();
  expect(getPrime.next().value).toBe(2);
  expect(getPrime.next().value).toBe(3);
  expect(getPrime.next().value).toBe(5);
  expect(getPrime.next().value).toBe(7);
  expect(getPrime.next().value).toBe(11);
  expect(getPrime.next().value).toBe(13);
  expect(getPrime.next().value).toBe(17);
  expect(getPrime.next().value).toBe(19);
  expect(getPrime.next().value).toBe(23);
  expect(getPrime.next().value).toBe(29);
});
