import { sort } from '.';

test('sort', () => {
  const seq = [1, 2, 3, 4, 5];
  expect(sort(seq)).toStrictEqual([5, 4, 3, 2, 1]);
  expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
});
