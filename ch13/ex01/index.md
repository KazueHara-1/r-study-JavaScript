```
setTimeout(() => console.log("Hello, world!"), 1000);

function longRunningFunction() {
  while (true) {
    // NOTE: while (true) {} は極端な例であり、現実で見ることは少ないかもしれません。
    // しかし、時間のかかる同期処理を実行して同様の問題が発生することは実際にあります。
  }
}

longRunningFunction();
```

予想：console.log()が1000ms後に実行される？実行時にlongRunningFunctionが邪魔して実行されない？のどちらか…

結果：console.log()の結果は表示されなかったことから、longRunningFunctionに邪魔されているものだと推測される。

説明：[タイムアウトとマイクロタスクの例](https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide#%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%A2%E3%82%A6%E3%83%88%E3%81%A8%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%BF%E3%82%B9%E3%82%AF%E3%81%AE%E4%BE%8B)にあるように、メインプログラム→タスクキューの処理という順番で実行される。  
今回は

- メインプログラム：longRunningFunction
- タスクキューに追加される処理：console.log

だったため、メインプログラムが永遠に終わらないのでconsole.log()の出力が行われなかった。
