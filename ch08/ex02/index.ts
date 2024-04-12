// べき乗を計算する関数を、べき乗演算子 (**) を使わずに再帰およびループでぞれぞれ実装しなさい。
// 可能なら再帰・ループの回数を少なくする工夫をしなさい。

export const recursive = (x: number, n: number): number => {
  if (n === 1) {
    return x;
  }
  if (n % 2 === 1) {
    return (
      x * recursive(x, Math.floor(n / 2)) * recursive(x, Math.floor(n / 2))
    );
  }
  return recursive(x, Math.floor(n / 2)) * recursive(x, Math.floor(n / 2));
};

export const loop = (x: number, n: number): number => {
  let ans = 1;
  if (n % 2 === 1) {
    ans *= x;
  }
  for (let i = 0; i < Math.floor(n / 2); i++) {
    ans *= x * x;
  }
  return ans;
};
