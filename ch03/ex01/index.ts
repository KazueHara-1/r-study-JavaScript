// 正負の  Infinity と NaN で +, -, \*, / の計算を全ての組み合わせでして結果を見なさい。

const nums = [+Infinity, -Infinity, +NaN, -NaN];

// 名前の付け方を迷ってしまい…うまいものが思いつきませんでした…
for (const num_1 of nums) {
  for (const num_2 of nums) {
    console.log(`(${num_1})+(${num_2})=${num_1 + num_2}`);
    console.log(`(${num_1})-(${num_2})=${num_1 - num_2}`);
    // *の誤植かなと思い勝手ながら*に修正しました
    console.log(`(${num_1})*(${num_2})=${num_1 * num_2}`);
    console.log(`(${num_1})/(${num_2})=${num_1 / num_2}`);
  }
}
