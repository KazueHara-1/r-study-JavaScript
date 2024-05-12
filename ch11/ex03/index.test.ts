import { littleToBig, BigToLittle } from './index.ts';

test('littleToBig()テスト', () => {
  const bytes = new Uint32Array([1, 2, 3, 4]);
  const big = littleToBig(bytes);
  const view = new DataView(big.buffer);
  expect(view.getUint32(0, false)).toBe(1);
});
test('bigToLittle()テスト', () => {
  const bytes = new Uint32Array([1, 2, 3, 4]);
  const big = littleToBig(bytes);
  const little = BigToLittle(big);
  const view = new DataView(little.buffer);
  expect(view.getUint32(0, true)).toBe(1);
});
