// P674のサンプルコード

// 6789番ポートでインタラクティブなノックノックジョークを配信するTCPサーバ
// （なぜ6は7を恐れるか？ 7は9を食べたから［訳注：食べたは英語でate｟エイト｠］）。
import { createServer } from "net";
import readline from "readline";
// Serverオブジェクトを作成し、接続の待ち受けを開始する。

const server = createServer();
server.listen(6789, () => console.log("Delivering laughs on port 6789"));

// クライアントが接続してきたら、ノックノックジョークを伝える。
server.on("connection", (socket) => {
  tellJoke(socket)
    .then(() => socket.end()) // ジョークを伝え終わったら、ソケットを閉じる。
    .catch((err) => {
      console.error(err); // エラーが発生したらログに記録する。
      socket.end(); // その場合でもソケットを閉じる。
    });
});

// 以下がすべてのジョーク。
const jokes = {
  Boo: "Don't cry...it's only a joke!",
  Lettuce: "Let us in! It's freezing out here!",
  "A little old lady": "Wow, I didn't know you could yodel!",
};
// このソケット上で、ノックノックジョークをブロックせずにインタラクティブに実行する。
async function tellJoke(socket) {
  // ジョークの中からランダムに1つを選ぶ。
  const randomElement = (a) => a[Math.floor(Math.random() * a.length)];
  const who = randomElement(Object.keys(jokes));
  const punchline = jokes[who];
  // readlineモジュールを使って、ユーザの入力を1行ずつ読み込む。
  const lineReader = readline.createInterface({
    input: socket,
    output: socket,
    prompt: ">> ",
  });
  // クライアントに1行のテキストを出力し、その後（デフォルトで）プロンプトを
  // 表示するユーティリティ関数。
  function output(text, prompt = true) {
    socket.write(`${text}\r\n`);
    if (prompt) lineReader.prompt();
  }
  // ノックノックジョークは、コール＆レスポンスの形式。ユーザから異なる
  // ステージで異なる入力を受け取り、ステージごとにその入力に対して
  // 異なるアクションを行う。
  let stage = 0;
  // ノックノックジョークを伝統的な方法で始める。
  output("Knock knock!");
  // ジョークが終わるまで、クライアントから非同期に行単位で読み込む。
  for await (const inputLine of lineReader) {
    if (stage === 0) {
      if (inputLine.toLowerCase() === "who's there?") {
        // ユーザがステージ0で正しい回答をした場合、ジョークの最初の
        // 部分を話し、ステージ1に進む
        output(who);
        stage = 1;
      } else {
        // そのほかの場合、ノックノックジョークのやり方をユーザに教える。
        output('Please type "Who\'s there?".');
      }
    } else if (stage === 1) {
      if (inputLine.toLowerCase() === `${who.toLowerCase()} who?`) {
        // ステージ1でユーザの反応が正しければ、オチを伝えて、
        // ジョークが終わったので戻る。
        output(punchline, false);
        return;
      } else {
        // ユーザに一緒に遊んでもらうようにする。
        output(`Please type "${who} who?".`);
      }
    }
  }
}
