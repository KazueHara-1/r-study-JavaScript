`undefined`は単なるグローバル変数であり、以下のように書き換えることができてしまう。

```
alert(undefined); // "undefined"
var undefined = "こんにちは";
alert(undefined) // "こんにちは"
```

対して、void 0は常に`undefined`を返す。そのため代わりにvoid 0を用いていた。

ただ、最近のブラウザではECMAScript 5仕様により、設定および書き込み不可となっている。そのため、わざわざvoid 0と書く必要がなくなった。

#### 参考：

- [JavaScriptで`undefined`の代わりに、`void 0`を使ったほうがいい理由](https://liginc.co.jp/web/js/38494)
- [undefined - JavaScript | MDN](<https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined#:~:text=%E6%9C%80%E8%BF%91%E3%81%AE%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC%20(JavaScript%201.8.5%20/%20Firefox%204%20%E4%BB%A5%E9%99%8D)%20%E3%81%A7%E3%81%AE%20undefined%20%E3%81%AF%E3%80%81%20ECMAScript%205%20%E4%BB%95%E6%A7%98%E3%81%AB%E3%82%88%E3%82%8A%E3%80%81%E8%A8%AD%E5%AE%9A%E4%B8%8D%E5%8F%AF%E3%80%81%E6%9B%B8%E8%BE%BC%E4%B8%8D%E5%8F%AF%E3%81%AE%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%20(%E3%81%9D%E3%81%86%E3%81%A7%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%A7%E3%82%82%E3%80%81%E4%B8%8A%E6%9B%B8%E3%81%8D%E3%81%AF%E9%81%BF%E3%81%91%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)>)
