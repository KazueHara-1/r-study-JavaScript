> グローバルオブジェクトを参照する方法を、ブラウザ内、node内、ブラウザnode問わずの３種記しなさい。

- ブラウザ内: 明示的にバックグランドタスクとして起動されるコードを除き、 Window がグローバルオブジェクトとなる。
- node内: global と呼ばれるオブジェクトがグローバルオブジェクトになる。
- ブラウザnode問わず: globalThis を使うと、ブラウザからでもnodeからでも参照が可能となる。

参考:  
https://developer.mozilla.org/ja/docs/Glossary/Global_object  
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis

> また、ブラウザとnodeのグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを10程度記しなさい。

- Window.closed: 読取専用 このプロパティは、現在のウィンドウが閉じているかどうかを示します。
- Window.credentialless: 読取専用 Experimental 現在の文書が 無信頼の <iframe> 内で読み込まれたかどうかを示す論理値を返します。詳しくは無信頼の iframe を参照してください。
- Window.crossOriginIsolated 読取専用 ウェブサイトがオリジン間分離状態にあるかどうかを示す論理値を返します。
- Window.customElements: 読取専用 CustomElementRegistry オブジェクトへの参照を返します。これは新しいカスタム要素の登録や、以前に登録したカスタム要素の情報を取得するために使用できます。
- Window.devicePixelRatio: 読取専用 現在のディスプレイの、物理ピクセルと端末非依存ピクセルの比率を返します。
- Window.alert(): 警告ダイアログを表示します。
- Window.close(): 現在のウィンドウを閉じます。
- Window.confirm(): ユーザーの応答が必要なメッセージを持つダイアログを表示します。
- Window.focus(): 現在のウィンドウにフォーカスを当てます。
- Window.open(): 新しいウィンドウを開きます。

> 最後に、グローバルオブジェクトにundefinedが定義されていることを確認し、過去のES仕様でどのような問題が発生していたかを記しなさい。

以前はundefinedを上書きすることができていた。そのため、値がundefinedであるかをチェックする際に以下のような動作が可能であった。

```
// ES3
window.undefined = 1;
// undefined === 1

const obj = {};

obj.prop === undefined; // false

// ES5
window.undefined = 1;
// undefined === undefined
```

参考

- https://zenn.dev/lollipop_onl/articles/eoz-using-undef-on-js
- https://eslint.org/docs/latest/rules/no-undefined
