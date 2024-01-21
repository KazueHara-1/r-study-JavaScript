// 実部と虚部をプロパティとして持つ 2 つの複素数オブジェクトを引数として四則演算の結果を返す関数 add、sub、mul、div を実装しなさい

type complex = {
  r: number;
  i: number;
};

export const add = (num1: complex, num2: complex) => {
  return { r: num1.r + num2.r, i: num1.i + num2.i };
};

export const sub = (num1: complex, num2: complex) => {
  return { r: num1.r - num2.r, i: num1.i - num2.i };
};

export const mul = (num1: complex, num2: complex) => {
  return {
    r: num1.r * num2.r - num1.i * num2.i,
    i: num1.r * num2.i + num1.i * num2.r,
  };
};

export const div = (num1: complex, num2: complex) => {
  const denominator = num2.r ** 2 + num2.i ** 2;
  console.log(denominator);
  return {
    r: (num1.r * num2.r + num1.i * num2.i) / denominator,
    i: (num1.i * num2.r - num1.r * num2.i) / denominator,
  };
};
