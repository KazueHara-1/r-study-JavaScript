import { cache } from '.';

test('', async () => {
  async function slowFn(obj) {
    await setTimeout(() => {}, 5000);
    return obj.x + obj.y;
  }
  // cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
  const cachedSlowFn = cache(slowFn);
  expect(await cachedSlowFn({ x: 1, y: 2 })).toBe(3);
  expect(await cachedSlowFn({ x: 1, y: 2 })).toBe(3);
});
