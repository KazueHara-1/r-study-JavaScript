// npm run server でサーバーを立てて http://localhost:3000/ch15.11-15/ex08/contents/ にアクセス

const sendRequest = (message) => {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("ws://localhost:3003");

    const TIMEOUT = 5000;
    let timeoutId;

    const timeout = () => {
      timeoutId = setTimeout(() => {
        reject(new Error("タイムアウトしました。"));
      }, TIMEOUT);
    };

    // 接続通知
    socket.onopen = () => {
      // メッセージ送信
      socket.send(message);
      timeout();
    };

    // エラー発生
    socket.onerror = (error) => {
      reject(error);
    };

    // メッセージ受信
    socket.onmessage = (event) => {
      clearTimeout(timeoutId);
      resolve(event.data);
    };

    // 切断
    socket.onclose = () => {
      reject("通信が切断されました。");
    };
  });
};

const response = await sendRequest("World");
console.log(response); // -> "Hello, World"
