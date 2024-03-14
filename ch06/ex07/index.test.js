import { assign } from '.';

describe('assgin', () => {
  test('プロパティ名被りなし', () => {
    const target = { x: 1 };
    const source = { y: 2, z: 3 };
    assign(target, source);
    expect(target).toStrictEqual({ x: 1, y: 2, z: 3 });
  });
  test('プロパティ名被りあり', () => {
    const target = { y: 1 };
    const source = { y: 2, z: 3 };
    assign(target, source);
    expect(target).toStrictEqual({ y: 2, z: 3 });
  });
  test('空のオブジェクト', () => {
    const target = {};
    const source = { x: 1, y: 2, z: 3 };
    assign(target, source);
    expect(target).toStrictEqual({ x: 1, y: 2, z: 3 });
  });
});
