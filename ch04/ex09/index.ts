// typeof 演算子のオペランドに、undefined, null, オブジェクト, NaN, 数値, 関数 を指定したときの返り値を予想しなさい。 その後実装しコンソール出力で確認しなさい。

// undefined→undefined
// null→object
// オブジェクト→object
// NaN→number
// 数値→number
// 関数→function

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof NaN);
console.log(typeof 1);
console.log(typeof function () {});

// 予想と同じ結果となった
