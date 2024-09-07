const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

const timeOutFetch = async (url, body) => {
  const controller = new AbortController();
  const options = { signal: controller.signal, timeout: 3000 };
  setTimeout(() => {
    controller.abort();
  }, options.timeout);
  return fetch(url, { ...body, ...options });
};

const retryFetch = async (url, body) => {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.remove("hidden");
  const maxRetry = 10;
  try {
    let result;
    for (let i = 0; i < maxRetry; i++) {
      result = await timeOutFetch(url, body);
      if (500 <= result.status && result.status < 600) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, i))
        );
      } else {
        break;
      }
    }
    return result;
  } catch (e) {
    if (e.name === "AbortError") {
      throw new Error("タイムアウトしました。");
    }
    throw e;
  } finally {
    loading[0].classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  try {
    const resp = await retryFetch("/api/tasks", { method: "GET" });
    if (!resp.status === 200) {
      const result = await resp.json();
      throw new Error(result.message);
    }
    const body = await resp.json();
    const items = body.items;
    items.forEach((item) => appendToDoItem(item));
  } catch (e) {
    alert(e);
  }
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault();
  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  try {
    const resp = await retryFetch("/api/tasks", {
      method: "POST",
      body: `{"name": "${todo}"}`,
    });
    if (!resp.status === 201) {
      const result = await resp.json();
      throw new Error(result.message);
    }
    const item = await resp.json();
    appendToDoItem(item);
  } catch (e) {
    alert(e);
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.id = task.id;
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.addEventListener("change", async (e) => {
    const target = e.target;
    try {
      const resp = await retryFetch(`/api/tasks/${target.id}`);
      if (resp.status !== 200) {
        const result = await resp.json();
        throw new Error(result.message);
      }
      const result = await resp.json();
      const updatedData = { ...result };
      updatedData.status = target.checked ? "completed" : "active";
      const updateResp = await retryFetch(`/api/tasks/${target.id}`, {
        method: "PATCH",
        body: JSON.stringify(updatedData),
      });
      if (updateResp.status !== 200) {
        const result = await resp.json();
        throw new Error(result.message);
      }
      label.style.textDecorationLine = target.checked ? "line-through" : "none";
    } catch (e) {
      alert(e);
    }
  });

  const destroy = document.createElement("button");
  destroy.id = task.id;
  destroy.textContent = "✖";
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.addEventListener("click", async (e) => {
    const target = e.target;
    try {
      const resp = await retryFetch(`/api/tasks/${target.id}`, {
        method: "DELETE",
      });
      if (resp.status !== 204) {
        const result = await resp.json();
        throw new Error(result.message);
      }
      elem.remove();
    } catch (e) {
      alert(e);
    }
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  list.prepend(elem);
  elem.appendChild(label);
  elem.appendChild(toggle);
  elem.appendChild(destroy);
}
