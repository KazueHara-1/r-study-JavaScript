import { C, FuncC } from './index.js'; // ts でも可

test('class', () => {
  const c = new C();
  expect(c.x).toBe(undefined);
  expect(c.getX()).toBe(42);
});
test('function', () => {
  const c2 = FuncC();
  expect(c2.x).toBe(undefined);
  expect(c2()).toBe(42);
});
