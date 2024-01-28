export const bitCount = (num: number) => {
  let count = 0;
  for (let i = 0; num >> i > 0; i++) {
    console.log(num >> i);
    if ((num >> i) % 2 === 1) {
      count++;
    }
  }
  return count;
};
