export const fibWhile = () => {
  const fib = [1, 1];
  let i = 1;
  let j = 1;
  while (fib.length < 10) {
    fib.push(i + j);
    const tmp = i + j;
    i = j;
    j = tmp;
  }
  return fib;
};

export const fibDoWhile = () => {
  const fib = [1, 1];
  let i = 1;
  let j = 1;
  do {
    fib.push(i + j);
    const tmp = i + j;
    i = j;
    j = tmp;
  } while (fib.length < 10);
  return fib;
};

export const fibFor = () => {
  const fib = [1, 1];
  for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib;
};
