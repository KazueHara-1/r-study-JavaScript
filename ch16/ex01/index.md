> 用語「マルチスレッド」について調べなさい。

マルチスレッド: 複数のタスクを並行して処理すること。  
逆に、複数のタスクを一つ一つ順番に処理することをシングルスレッドという。

> 次にフィボナッチ数を計算するmFib.jsをスレッド数を変更しながら実行し(*1)、 コンソール出力とOS機能(*2)で結果とスレッド数を確認しなさい。

実行結果①（スレッド数:17）:

```
$ node mFib.js 45 1
Worker 0 execution time: 24.572s
Total execution time: 24.583s
Fibonacci number: 1836311902
```

実行結果②（スレッド数:18）:

```
$ node mFib.js 45 2
Worker 1 execution time: 10.399s
Worker 0 execution time: 15.983s
Total execution time: 15.993s
Fibonacci number: 1836311902
```

実行結果③（スレッド数:19）:

```
$ node mFib.js 45 3
Worker 2 execution time: 5.507s
Worker 0 execution time: 8.640s
Worker 1 execution time: 13.550s
Total execution time: 13.561s
Fibonacci number: 1836311902
```

実行結果④（スレッド数:20）:

```
$ node mFib.js 45 4
Worker 3 execution time: 3.716s
Worker 2 execution time: 5.695s
Worker 1 execution time: 8.429s
Worker 0 execution time: 12.511s
Total execution time: 12.522s
Fibonacci number: 1836311902
```

```
$ node mFib.js 45 4
Worker 3 execution time: 3.716s
Worker 2 execution time: 5.695s
Worker 1 execution time: 8.429s
Worker 0 execution time: 12.511s
Total execution time: 12.522s
Fibonacci number: 1836311902
```

> 最後にあなたのPCのCPUスペックを調査し、適切なスレッド数についての考察を記しなさい。

コア:10
論理プロセッサ:12

適切なスレッド数がいくらくらいなのかはよくわかりませんでした…4000スレッド利用中の時のCPU利用率が10%前後だったので、おおよそ40000スレッドで利用率が100%になる…？のだと思われます。
