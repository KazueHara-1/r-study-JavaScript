> 単調増加と言っても、同一コンテキスト内の処理であればという条件はあります。 例えば、Worker の中から performance.now() を呼び出して得られる値は、Worker が作成された時間が基準になるため、メインコンテキストで performance.now() を呼び出して得られる値より小さくなります。
( https://maku77.github.io/js/time/performance-now.html )

今回だと、performance.now()の基準時間はconsole.log()が呼び出された時刻が基準となる。costOfLoopはcostOfLengthPlusLoopより先に定義されているため、基準となる時間が若干早く、ループ数が少ない等、場合によってはマイナスになってしまうことがある。

引数が大きくなると値が小さくなることについては不明…ただ、ChromeやFirefoxではスリープ中もperformance.now()がカウントしてしまうというバグが存在する。
