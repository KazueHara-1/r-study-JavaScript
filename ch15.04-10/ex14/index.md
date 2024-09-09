> ブラウザの開発者ツールの「ネットワーク」タブを確認してみよう。リンクをクリックしたときに通信は発生しているだろうか？

最初にページを読み込む際はページをロードするために通信が発生しているが、それ以降は通信は発生していない。

> pushState はいつ実行されているだろうか？

リンクをクリックしたときに実行されている。

> 15.4-10.12 では pushState を使った実装でページのリロード時に正しく動作しなかったが、この問題ではどうだろうか？

ブラウザの戻るボタンで前のページに戻ってもページは正常に表示されていた。ex12では実際には存在しないページの履歴を追加していたため、再読み込みを行うと404エラーとなっていたが今回は実際に存在するページのパスを履歴に追加していたために404エラーにはならない。