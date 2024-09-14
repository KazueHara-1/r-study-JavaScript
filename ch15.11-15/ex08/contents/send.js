// npm run server でサーバーを立てて http://localhost:3000/ch15.11-15/ex08/contents/ にアクセス

const sendRequest = (message) => {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("ws://localhost:3003");

    const TIMEOUT = 2000;
    let timeoutId;
    const id = self.crypto.randomUUID();
    console.log(id);

    const timeout = () => {
      timeoutId = setTimeout(() => {
        reject("タイムアウトしました。");
      }, TIMEOUT);
    };

    // 接続通知
    socket.onopen = () => {
      // // メッセージ送信
      // messages.forEach((message) => {
      //   socket.send(message);
      //   timeout();
      // });
      socket.send(JSON.stringify({ id, message }));
      timeout();
    };

    // エラー発生
    socket.onerror = (error) => {
      reject(error);
    };

    // メッセージ受信
    socket.onmessage = (event) => {
      clearTimeout(timeoutId);
      const resp = JSON.parse(event.data);
      if (resp.id === id) {
        resolve(resp.message);
        console.log(event.data);
      }
    };

    // 切断
    socket.onclose = () => {
      reject("通信が切断されました。");
    };
  });
};

// const response = await sendRequest("World");
// console.log(response); // -> "Hello, World"

const inputs = [];
inputs.push(document.getElementById("form1"));
inputs.push(document.getElementById("form2"));
inputs.push(document.getElementById("form3"));

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  inputs.forEach(async (input) => {
    try {
      const res = await sendRequest(input.value);
      const result = document.createElement("p");
      result.textContent = res;
      input.after(result);
    } catch (e) {
      const error = document.createElement("p");
      error.textContent = e;
      input.after(error);
    }
  });
});
