import { func1, func2, func3 } from './index.ts';

describe('func1() test', () => {
  test('func1(1, "a")', () => {
    const array = func1(1, 'a');
    expect(array).toStrictEqual(['a']);
  });
  test('func1(10, "abc")', () => {
    const array = func1(10, 'abc');
    expect(array).toStrictEqual([
      'abc',
      'abc',
      'abc',
      'abc',
      'abc',
      'abc',
      'abc',
      'abc',
      'abc',
      'abc',
    ]);
  });
});

describe('func2() test', () => {
  test('func2(0)', () => {
    expect(func2(0)).toBe(0);
  });
  test('func2(1)', () => {
    expect(func2(1)).toBe(1);
  });
  test('func2(2)', () => {
    expect(func2(2)).toBe(4);
  });
  test('func2(-3)', () => {
    expect(func2(-3)).toBe(9);
  });
});

describe('func3() test', () => {
  const MOCK_DATE_VALUE = 1234567890;
  Date.now = jest.fn(() => MOCK_DATE_VALUE);
  test('func3()', () => {
    const obj = func3();
    expect(obj.now).toBe(MOCK_DATE_VALUE);
  });
});
