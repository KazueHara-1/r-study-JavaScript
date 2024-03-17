import { obj } from '.';

test('r = 1, theta = 0', () => {
  obj.r = 1;
  obj.theta = 0;
  expect(obj.x).toBe(1);
  expect(obj.y).toBe(0);
});

test('r = 1, theta = 90', () => {
  obj.r = 1;
  obj.theta = 90;
  expect(obj.x).toBeCloseTo(0);
  expect(obj.y).toBe(1);
});

test('r = 1, theta = 180', () => {
  obj.r = 1;
  obj.theta = 180;
  expect(obj.x).toBe(-1);
  expect(obj.y).toBeCloseTo(0);
});

test('set x = 0', () => {
  obj.x = 0;
  expect(obj.x).toBeCloseTo(0);
});

test('set y = 0', () => {
  obj.y = 0;
  expect(obj.y).toBeCloseTo(0);
});
