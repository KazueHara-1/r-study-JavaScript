> このサーバでは Cookie を使ってクライアントのセッションを識別し、タスク一覧をセッションごとに分離して管理する簡易的な認証/認可を行っている。サーバが設定している Cookie の値は sid=<セッションに一意に割り当てた ID>; SameSite=Lax; Path=/; HttpOnly; である。ToDo アプリでいくつかのタスクを作成した後、以下に挙げる操作を実施したとき、それぞれどのような結果になるか記載し、その理由を説明しなさい。

- index.js でdocument.cookie プロパティを console.logで表示する
  - 結果: <empty string> が返る
  - 理由: HttpOnlyが設定されているため。この時、JavaScriptからCookieの内容を参照できない。
- ブラウザの開発者コンソールで http://localhost:3000/ の Cookie を表示する
  - 結果: 参照可
  - 理由: 開発者コンソールからは基本的にCookieは参照できてしまうため。
- ToDo アプリのタブをリロードする
  - 結果: 参照可
  - 理由: 同一セッション内であるため。
- 同一ブラウザの異なるタブやウィンドウで http://localhost:3000/ を開いて ToDo リストの状態を確認する
  - 結果: 参照可
  - 理由: 同一セッションかつ同一オリジンからの参照であるため。
- シークレットウィンドウや異なるブラウザで http://localhost:3000/ を開いて ToDo リストの状態を確認する
  - 結果: 参照不可
  - 理由: セッション外からのアクセスであるため
- http://127.0.0.1:3000/ を開いて ToDo リストの状態を確認する
  - 結果: 参照不可
  - 理由: "127.0.0.1"と"localhost"とドメインが異なるため。
