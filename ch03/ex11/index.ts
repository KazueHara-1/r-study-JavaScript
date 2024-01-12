// Symbol() を使い、同じ文字列から生成された 2 個の Symbol 変数を作成し、それらをプロパティとして持つオブジェクトを作成しなさい。
// そのオブジェクトに対して、作成したSymbol変数を使って各プロパティの値を取得しなさい。
// また、Symbol()ではなく、Symbol.for()で同名の変数を作成した場合の挙動を確認しなさい。

type sampleObjType = {
  [key: symbol]: number;
};
const str = "text";
const symbol_1: symbol = Symbol(str);
const symbol_2 = Symbol(str);

const sampleObject: sampleObjType = {};
sampleObject[symbol_1] = 1;
sampleObject[symbol_2] = 2;

console.log(sampleObject[symbol_1]);
console.log(sampleObject[symbol_2]);

// Symbol.for()だと()の中身が同じなら同じ値を返す
