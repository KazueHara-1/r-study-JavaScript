import { any, catching } from '.';

describe('any', () => {
  it('any関数のテスト', () => {
    const isNonZero = any(
      (n) => n > 0,
      (n) => n < 0
    );
    expect(isNonZero(0)).toBe(false); // => false
    expect(isNonZero(42)).toBe(true); // => true
    expect(isNonZero(-0.5)).toBe(true); // => true
  });
});

describe('catching', () => {
  it('catching関数のテスト', () => {
    const safeJsonParse = catching(JSON.parse, (e) => {
      return { error: e.toString() };
    });
    expect(safeJsonParse('{"a": 1}')).toStrictEqual({ a: 1 });
    expect(safeJsonParse('{Invalid Json}')).toStrictEqual({
      error: 'SyntaxError: Unexpected token I in JSON at position 1',
    });
  });
});
