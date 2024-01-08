import { equalArrays } from "./index.ts";

const a = [Number.MAX_VALUE, Number.MAX_VALUE];
const b = [Number.MAX_VALUE + 100, Number.MAX_VALUE + 200];
test(`${a} ${b} => true`, () => {
  expect(equalArrays(a, b)).toBe(true);
});
