import threads from "worker_threads";

// worker_threadsモジュールは、論理値のisMainThreadプロパティをエクスポート
// する。このプロパティは、Nodeがメインスレッドを実行しているときはtrueになる。
// ワーカーを実行しているときはfalseになる。この機能を使って、メインスレッドと
// ワーカースレッドを同じファイルで実装することができる。
if (threads.isMainThread) {
  // メインスレッドで実行している場合は、関数をエクスポートするだけ。計算量の
  // 多いタスクをメインスレッドで実行するのではなく、この関数はタスクをワーカーに
  // 渡し、ワーカーが終了したときに解決するPromiseを返す。
  module.exports = function reticulateSplines(splines) {
    return new Promise((resolve, reject) => {
      // 同じファイルのコードを読み込んで実行するワーカーを作成する。
      // 特別な__filename変数を使っていることに注意。
      const reticular = new threads.Worker(__filename);
      // splines配列のコピーをワーカーに渡す。
      reticular.postMessage(splines);
      // そして、ワーカーからメッセージまたはエラーを受け取るとPromiseを
      // 解決したり、失敗させたりする。
      reticular.on("message", resolve);
      reticular.on("error", reject);
    });
  };
} else {
  // この部分を実行しているのであれば、ワーカースレッドの中ということになる。
  // このワーカーはメッセージを1つしか受け取らないように設計されているので、
  // イベントハンドラをon()ではなくonce()で登録する。このようにすることで、
  // ワーカーの作業が完了したときに自然に終了することができる。
  threads.parentPort.once("message", (splines) => {
    // 親スレッドからsplinesを受け取ると、この配列をループして
    // 網状にする。
    for (const spline of splines) {
      // 例として、splineオブジェクトには、多くの計算を必要とする
      // reticulate()があると仮定する。
      spline.reticulate ? spline.reticulate() : (spline.reticulated = true);
    }
    // 最終的に、すべてのsplines（スプライン）が網状になったら、
    // そのコピーをメインスレッドに戻す。
    threads.parentPort.postMessage(splines);
  });
}
