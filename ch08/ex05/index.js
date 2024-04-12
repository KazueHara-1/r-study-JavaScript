// 可変長引数を受け取り、以下の仕様でオブジェクトを返却する関数 sequenceToObject(...values)を作成しなさい。

//     奇数番に string の値を受け取り偶数番に任意の値を受け取り、各偶数奇数のペアで {奇数番の値: 偶数番の値}の形式になるオブジェクトを返却する。
//     例えばsequenceToObject("a", 1, "b", 2)は{a: 1, b: 2}を返却する
//     いずれかの奇数番の値が string でない場合、または値の個数の合計が偶数ではない場合は例外を発生させる

// また作成した sequenceToObject に対してスプレッド演算子で配列を与えられることを確認しなさい。

export const sequenceToObject = (...values) => {
  if (values.length % 2 !== 0) {
    throw new Error();
  }
  const returnObj = {};
  for (let i = 0; i < values.length / 2; i++) {
    const index = i * 2;
    if (typeof values[index] !== 'string') {
      throw new Error();
    }
    returnObj[values[index]] = values[index + 1];
  }
  return returnObj;
};
