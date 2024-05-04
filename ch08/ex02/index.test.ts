import { loop, recursive } from './index.ts';

describe('recursive() test', () => {
  test.each([
    [1, 1, 1],
    [2, 1, 2],
    [2, 2, 4],
    [2, 3, 8],
    [2, 4, 16],
    [2, 10, 1024],
    [2, 30, 1073741824],
  ])('%i ** %i = %i', (a, b, expected) => {
    expect(recursive(a, b)).toBe(expected);
  });
});

describe('loop() test', () => {
  test.each([
    [1, 1, 1],
    [2, 1, 2],
    [2, 2, 4],
    [2, 3, 8],
    [2, 4, 16],
    [2, 10, 1024],
    [2, 30, 1073741824],
  ])('%i ** %i = %i', (a, b, expected) => {
    expect(loop(a, b)).toBe(expected);
  });
});
