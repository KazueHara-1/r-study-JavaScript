## 問題
正規表現の処理には予想以上に時間がかかる可能性がある。

例えば利用者によって ^(a|aa)+$ といった文字列が入力されたと考えよう。 この正規表現が "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!" といった文字列にマッチするか調べようとするとどうなるだろうか。

## 回答
バックトラックで文字列の比較を行うため、以下のように文字を分けて考えていく。

- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `a!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `a`, `!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `aa!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `aa`, `!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `a`, `a!`
- `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, `a`, `a`, `!`
  …

という風に文字列を分けて考えてしまうため、膨大な量を計算する必要が出てくる。
これは、正規表現が()+というようにくりかえしを表現しているために起こってしまうことである。

参考：https://qiita.com/Tatamo/items/68a10c6274953e695354
https://ja.stackoverflow.com/questions/67135/%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE%E3%81%A7match%E3%82%92%E4%BD%BF%E3%81%86%E3%81%A8-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E5%AE%9F%E8%A1%8C%E3%81%8C%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93
http://nmi.jp/2022-02-18-Understanding-ReDoS
