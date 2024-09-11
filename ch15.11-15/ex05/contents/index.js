const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

const dbName = "DB";
const storeName = "todoList";

const request = indexedDB.open(dbName, 1); // データベースの v1 をリクエスト。
request.onerror = console.error;
request.onsuccess = () => {
  // 完了したときに、この関数が呼び出される。
  // const db = request.result; // リクエストの結果はデータベース。
  // callback(db); // データベースを引数にコールバックを呼び出す。
};
request.onupgradeneeded = () => {
  const db = request.result;
  const store = db.createObjectStore(storeName, { keyPath: "id" });
  store.createIndex("name", "status");
};

// タスクの一覧を取得する
const onLoad = () => {
  const request = indexedDB.open(dbName);

  request.onsuccess = () => {
    const db = request.result;
    const trans = db.transaction(storeName, "readonly");
    const store = trans.objectStore(storeName);
    const getReq = store.getAll();

    getReq.onsuccess = (event) => {
      const tasks = event.target.result;
      tasks.forEach((item) => appendToDoItem(item));
    };
  };
};

// タスクの ID を指定して取得する
const getSpecificTask = (id, callback) => {
  const request = indexedDB.open(dbName);

  request.onsuccess = () => {
    const db = request.result;
    const trans = db.transaction(storeName, "readonly");
    const store = trans.objectStore(storeName);
    const getReq = store.get(id);

    getReq.onsuccess = (event) => {
      const task = event.target.result;
      callback(task);
    };
  };
};

// タスクを新規作成する
const createTask = (todo, callback) => {
  const request = indexedDB.open(dbName);

  request.onsuccess = () => {
    const db = request.result;
    const trans = db.transaction(storeName, "readwrite");
    const store = trans.objectStore(storeName);
    const getReq = store.getAll();

    getReq.onsuccess = function (event) {
      const tasks = event.target.result;
      const newTask = {
        id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1, // 最大のIDより1大きいものを今回のIDとする
        name: todo,
        status: "active",
      };
      const addReq = store.add(newTask);
      addReq.onsuccess = () => {
        callback(newTask);
      };
    };
  };
};

// タスクを一部更新する
const updateTask = (task) => {
  const request = indexedDB.open(dbName);

  request.onsuccess = () => {
    const db = request.result;
    const trans = db.transaction(storeName, "readwrite");
    const store = trans.objectStore(storeName);
    store.put(task);
  };
};

// タスクを削除する
const deleteTask = (id) => {
  const request = indexedDB.open(dbName);

  request.onsuccess = () => {
    const db = request.result;
    const trans = db.transaction(storeName, "readwrite");
    const store = trans.objectStore(storeName);
    store.delete(id);
  };
};

window.addEventListener("storage", (e) => {
  // 一度タスクを全削除
  const taskList = document.getElementsByTagName("li");
  Array.from(taskList).forEach((task) => task.remove());
  // 追加
  try {
    const items = windowGetTasks();
    items.forEach((item) => appendToDoItem(item));
  } catch (e) {
    alert(e);
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  try {
    onLoad();
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
    createTask(todo, appendToDoItem);
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
  label.style.textDecorationLine =
    task.status === "completed" ? "line-through" : "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.id = task.id;
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.addEventListener("change", async (e) => {
    const target = e.target;
    try {
      getSpecificTask(Number(target.id), (task) => {
        const updatedData = { ...task };
        updatedData.status = target.checked ? "completed" : "active";
        updateTask(updatedData);
        label.style.textDecorationLine = target.checked
          ? "line-through"
          : "none";
      });
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
      deleteTask(Number(target.id));
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
