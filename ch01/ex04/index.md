- 開発者ツール (Chrome の場合 F12) のコンソール上に何が表示されるか予想し、結果が一致するか確認しなさい。

最初のconsole.logではanswer:42のオブジェクトが、次のconsole.logではanswer:0のオブジェクトが表示されると考えていた。
しかし、ブラウザを開いた後、開発者ツールにより出力を確認したところ、answer:0のオブジェクトが2つ出力されていた。

- 開発者ツールを開いた状態のタブで HTML を開く場合と、HTML を開いた状態のタブで開発者ツールを開く場合とで、結果を比較しなさい。

開発者ツールを開いた状態のタブで HTML を開く場合：最初の予想通り、最初のconsole.logではanswer:42のオブジェクトが、次のconsole.logではanswer:0のオブジェクトが表示されていた。

HTML を開いた状態のタブで開発者ツールを開く場合：answer:0のオブジェクトが2つ出力されていた。

- 常に期待した結果を得るためにはどのようにコードを修正すべきか答えなさい。

> console.log() を呼び出した時点でのオブジェクトの「値」が表示されるのではなく、内容を見るために開いた時点での値が表示されます。
> 参考：https://developer.mozilla.org/ja/docs/Web/API/console/log_static

上記より、**内容を見るために開発者ツールを開いた時点**での値が表示される。

そのため、途中で値が変わるコードの場合、開発者ツールを開くタイミングにより値が変わってしまう危険性がある。

これを防止するために、例えば以下のように、タイミングによって値が変わらないようなコードを書けば、常に期待した結果が得られる。

```
<!DOCTYPE html>
<html>
  <body>
    <script>
      let life_42 = { answer: 42 };
      console.log(life_42);
      let life_0 = { answer: 0 };
      console.log(life_0);
    </script>
  </body>
</html>
```