import { sequenceToObject } from '.';

describe('sequenceToObject()', () => {
  test('{ a: 1 }', () => {
    expect(sequenceToObject('a', 1)).toStrictEqual({ a: 1 });
  });
  test('{ a: 1, b: 2 }', () => {
    expect(sequenceToObject('a', 1, 'b', 2)).toStrictEqual({ a: 1, b: 2 });
  });
  test('奇数個', () => {
    expect(() => sequenceToObject('a', 1, 'b')).toThrow();
  });
  test('文字列以外', () => {
    expect(() => sequenceToObject(1, 1, 2, 2)).toThrow();
  });
  test('スプレッドで{ a: 1, b: 2 }', () => {
    const array = ['a', 1, 'b', 2];
    expect(sequenceToObject(...array)).toStrictEqual({ a: 1, b: 2 });
  });
});
