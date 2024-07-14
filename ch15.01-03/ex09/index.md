Reactでは、文字列はレンダリング時に自動的にエスケープされるため、多くの場合はXSSを防ぐことができる。

参考：[Introducing JSX – React](https://legacy.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)

しかし、以下のようにエスケープが行われないパターンが存在する。

- [dangerouslySetInnerHTML](https://ja.legacy.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
  - ReactでブラウザDOMのinnerHTMLを表したもの。これを使うとエスケープせずそのままHTMLを書き換えてしまうため、XSSが起こる可能性がある。
- 受け取ったユーザー入力をそのまま href 属性に渡してしまう場合
  - 例えば、http/httpsのスキームのURLしか入力できないようにすることで、上記脆弱性は回避できる。

参考：[React における XSS｜React と Vue に関する XSS アンチパターン](https://zenn.dev/yuuhu04/books/xss-anti-pattern-of-react-and-vue/viewer/xss-over-react)
