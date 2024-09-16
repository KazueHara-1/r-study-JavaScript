const addChatStyle = (item) => {
  item.style.width = "fit-content";
  item.style.padding = "8px";
  item.style.marginTop = "8px";
  item.style.marginBottom = "8px";
  return item;
};

const onClickSubmitBtn = () => {
  const chatArea = document.getElementById("chat-area");
  const input = document.getElementById("input");
  const inputText = input.value;
  const req = document.createElement("p");
  req.class = "chat-item";
  req.textContent = inputText;
  req.style.backgroundColor = "lightcyan";
  req.style.marginLeft = "auto";

  chatArea.appendChild(addChatStyle(req));
  const url = "http://localhost:11434/api/chat";
  const data = {
    model: "gemma2:2b",
    messages: [
      {
        role: "user",
        content: inputText,
      },
    ],
    stream: false,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const inputText = data.message.content;
      const res = document.createElement("p");
      res.class = "chat-item";
      res.textContent = inputText;
      res.style.backgroundColor = "palegreen";
      res.style.marginRight = "auto";
      chatArea.appendChild(addChatStyle(res));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const submit = document.getElementById("submit");
submit.addEventListener("click", onClickSubmitBtn);
