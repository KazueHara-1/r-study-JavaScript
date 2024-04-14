import { TypedMap } from './index.js'; // ts でも可

describe('TypedMapテスト', () => {
  test('値を追加できる', () => {
    const map = new TypedMap('string', 'string');
    map.set('a', 'A');
    expect(map.map.get('a')).toBe('A');
  });
  test('エラー', () => {
    expect(() => {
      const map = new TypedMap('string', 'string');
      map.set('a', 1);
    }).toThrow();
  });
});
