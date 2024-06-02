export function fibonacciSequenceIterator() {
  let x = 0,
    y = 1;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const result = { value: y, done: false };
      [x, y] = [y, x + y];
      return result;
    },
  };
}
