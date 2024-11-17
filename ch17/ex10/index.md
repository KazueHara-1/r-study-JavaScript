## TypeScriptとFlowについて、どちらが主流となっているかを調べなさい。 また、その理由を考えてまとめなさい。

### 主流となっているもの

TypeScript

### その理由

- 3rd Party Library における Flow の型定義の資産の少なさ

  > Flow の型定義レポジトリである flow-typed には、約 850 のライブラリの型定義があります。  
  > 一方、 TypeScript の型定義レポジトリである DefinitelyTyped には約 7500 のライブラリの型定義があります。

  ([40万行のコードをFlowからTypeScriptに移行した](https://zenn.dev/yunika/articles/8313960cfbc979#3rd-party-library-%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B-flow-%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%81%AE%E8%B3%87%E7%94%A3%E3%81%AE%E5%B0%91%E3%81%AA%E3%81%95))

  ※上記記事時点（2020年）時点での比較
  ※ユーザー離れもあってか、現状[flow-typed](https://github.com/flow-typed/flow-typed)の更新速度は下がっている。

  > As you might have noticed, our activity has slowed down in recent months.

- 上記記事にもある通り、まだバージョン0....なのでベータ版扱い。破壊的変更が入りやすい。

- テキストにある通り、TypeScriptは型以外にnamespace等、JavaScriptには存在しない独自機能を追加している。

個人的には破壊的変更が入りやすいこと、対応しているパッケージが少ないことが致命的だと思った。
