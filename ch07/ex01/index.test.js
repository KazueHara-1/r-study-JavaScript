import { add, mul } from '.';

test('add', () => {
  const array1 = [
    [1, 2],
    [3, 4],
  ];
  const array2 = [
    [1, 2],
    [2, 1],
  ];
  expect(add(array1, array2)).toStrictEqual([
    [2, 4],
    [5, 5],
  ]);
});

test('mul', () => {
  const array1 = [
    [2, 3],
    [1, 4],
  ];
  const array2 = [
    [3, 1],
    [2, 4],
  ];
  expect(mul(array1, array2)).toStrictEqual([
    [12, 14],
    [11, 17],
  ]);
});
