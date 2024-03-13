import { getPropertyName } from './index.ts';

describe('プロパティ名を返す関数のテスト', () => {
  test('列挙可能なもののみ', () => {
    const obj = { a: 1, b: 2, c: 3, 1: 1 };
    const res = getPropertyName(obj);
    expect(res).toEqual(expect.arrayContaining(['a', 'b', 'c', '1']));
    expect(res.length).toBe(4);
  });
  test('列挙不可能なもの含む', () => {
    const obj = { a: 1, b: 2, c: 3 };
    Object.defineProperty(obj, 'enumerable', {
      value: 2,
      enumerable: false,
    });
    const res = getPropertyName(obj);
    expect(res).toEqual(expect.arrayContaining(['a', 'b', 'c', 'enumerable']));
    expect(res.length).toBe(4);
  });
  test('Symbol含む', () => {
    const sym = Symbol('symbol');
    const obj = { a: 1, b: 2, c: 3, [sym]: 1 };
    const res = getPropertyName(obj);
    expect(res).toEqual(expect.arrayContaining(['a', 'b', 'c', sym]));
    expect(res.length).toBe(4);
  });
  test('継承プロパティも返すか', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj = Object.create(obj1);
    obj.d = 2;
    const res = getPropertyName(obj);
    expect(res).toEqual(expect.arrayContaining(['a', 'b', 'c', 'd']));
    expect(res.length).toBe(4);
  });
});
