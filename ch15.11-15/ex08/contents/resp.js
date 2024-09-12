// npm run server でサーバーを立てて http://localhost:54578/ch15.11-15/ex08/contents/resp にアクセス

const socket = new WebSocket("ws://localhost:3003");

//  エラー発生
socket.onerror = (error) => {
  console.log(error);
};

//  メッセージ受信
socket.onmessage = (event) => {
  // メッセージ送信
  socket.send(`Hello, ${event.data}`);
};

//  切断
socket.onclose = () => {
  console.log("通信切断");
};
