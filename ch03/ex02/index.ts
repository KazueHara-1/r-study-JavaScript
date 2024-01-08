// JavaScript の整数の最大値と最小値をコンソールに出力しなさい。
// なお最大値最小値は ES6 の Number のプロパティ定義を利用しなさい (3.2.3 参照)。

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// 同様に最大値+1 をコンソールに出力しなさい。

console.log(Number.MAX_VALUE + 1);
console.log(Number.MIN_VALUE + 1);

// 最後に最大値+1 と最大値+2 を === で比較した結果をコンソールに出力し、そのように出力される理由を簡潔に文章で記載しなさい。

console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // true
console.log(Number.MIN_VALUE + 1 === Number.MIN_VALUE + 2); // false

// JavaScriptで使われているIEEE-754浮動小数点表現形式により値が丸められてしまうため、MAX_VALUEは数値上1の差があってもその差が反映されない。
// MIN_VALUEは1や2という数値に対してMIN_VALUEが小さすぎるので丸められてしまい、結果的に1と2を比較することになる。
