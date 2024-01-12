// Number() 関数で true, 1234, "text" をそれぞれ数値変換しコンソール出力しなさい。

console.log(`Number(true):${Number(true)}`);
console.log(`Number(1234):${Number(1234)}`);
console.log(`Number("text"):${Number("text")}`);

// 同様に、Boolean() 関数で 1234, 0 を真偽値変換、String() 関数で true, 1234 を文字列変換しなさい。

console.log(`Boolean(1234):${Boolean(1234)}`);
console.log(`Boolean(0):${Boolean(0)}`);

console.log(`String(true):${String(true)}`);
console.log(`String(1234):${String(1234)}`);

// 更に、parseInt() で "12,742 km：地球の直径"、 parseFloat() で "1.618：黄金比" を変換してコンソール出力しなさい。

// console.log(`parseInt(12,742 km):${parseInt("12,742 km")}`);
console.log(
  `parseInt(12,742 km：地球の直径):${parseInt("12,742 km：地球の直径")}`
);
// console.log(`parseFloat(1.618):${parseFloat(1.618)}`);
console.log(`parseFloat("1.618：黄金比"):${parseFloat("1.618：黄金比")}`);
