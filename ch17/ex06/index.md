開発者ツールで ソース タブ(Chrome, Edge, Safari) または デバッガー タブ(Firefox) を開き、ソースコードファイルがどのように表示されるかを確認しなさい。  
※FireFoxで確認  
ソースファイルの"webpack"部分に、元のコードが表示されていた。また、index.jsだけでなくインポート元のファイル（関数をExportしているファイル）も含め、バンドル前のファイル構造を保って表示されていた。

バンドルしたコードの実行中に、バンドル前のソースコードファイルに基づいたブレークポイントの設定や変数の値の確認等のデバッグが可能か確認しなさい。  
→FireFoxでは可能であった。