// 自然数nと英数文字cを引数にとり、文字cをn回コンソール出力してから文字cをn個含む配列を返す
// パラメーターが複数であり、関数本体はreturn文以外も含むので()や{}は省略不可
export const func1 = (n: number, c: string) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    console.log(c);
    array.push(c);
  }
  return array;
};

// 数値xを引数にとり、xの二乗の数値を返す
// パラメーターが1つだけなのでパラメータxを囲む()は省略可能
// 関数本体がreturn文のみなので{}も不要
export const func2 = (x: number) => x * x;

// 引数なしで、現在時刻のプロパティnowを含むオブジェクトを返す
// 引数なしのため()は省略不可
// 関数本体がreturn文のみなので{}は不要
export const func3 = () => ({ now: Date.now() });
