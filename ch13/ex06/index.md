> jQuery Deferred について調べ Promise との関係性について説明しなさい。

DeferredはPromiseに似ており、pending, resolved, rejectedの3状態をとるオブジェクト。
doneとfallを使い、それぞれresolved, rejected時に実行するコールバックを設定する。
また、whenを使い、すべての非同期処理が終了したのちのアクションを設定できる。（JavaScriptでもPromise.all()を使い似た処理が可能）

※jQueryの2.xまではjQuery DeferredのPromiseとJavaScriptのPromiseは少し挙動が異なっていたが、現在はJavaScriptの挙動に準拠するようになっている。

- 以前：resolveやrejectが呼び出されるとコールバックを即時実行していた
- 現在：コールバックは即時実行ではなく、タスクキューに追加され、実行される。
