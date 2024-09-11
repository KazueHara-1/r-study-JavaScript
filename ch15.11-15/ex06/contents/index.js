const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// sessionStorageが使えない場合の保存先
let tempData = [];

// APIに似たものを作る
const TASK_KEY = "todoList";

// タスクの一覧を取得する
const getTasks = () => {
  try {
    const data = sessionStorage.getItem(TASK_KEY);
    if (data) {
      const todos = JSON.parse(data);
      return todos;
    }
    // データがない場合は空行列を返す。
    return [];
  } catch (e) {
    // sessionStorageが使えない
    return tempData;
  }
};

const windowGetTasks = () => {
  try {
    const data = window.sessionStorage.getItem(TASK_KEY);
    if (data) {
      const todos = JSON.parse(data);
      return todos;
    }
    // データがない場合は空行列を返す。
    return [];
  } catch (e) {
    // sessionStorageが使えない
    return tempData;
  }
};

// タスクの ID を指定して取得する
const getSpecificTask = (id) => {
  const tasks = getTasks();
  const task = tasks.find((task) => task.id.toString() === id);
  if (task) {
    return task;
  }
  throw new Error("指定されたIDのタスクは存在しません。");
};

// タスクを新規作成する

const createTask = (todo) => {
  const tasks = getTasks();
  const newTasks = [...tasks];
  const newTask = {
    id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1, // 最大のIDより1大きいものを今回のIDとする
    name: todo,
    status: "active",
  };
  newTasks.push(newTask);
  try {
    sessionStorage.setItem(TASK_KEY, JSON.stringify(newTasks));
    return newTask;
  } catch (e) {
    tempData = newTasks;
    return newTask;
  }
};

// タスクを一部更新する

const updateTask = (id, task) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id.toString() === id);
  const updatedTasks = [...tasks];
  updatedTasks[taskIndex] = task;
  try {
    sessionStorage.setItem(TASK_KEY, JSON.stringify(updatedTasks));
  } catch (e) {
    tempData = updatedTasks;
  }
};

// タスクを削除する
const deleteTask = (id) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id.toString() === id);
  const removedTasks = [...tasks];
  removedTasks.splice(taskIndex, 1);
  try {
    sessionStorage.setItem(TASK_KEY, JSON.stringify(removedTasks));
  } catch (e) {
    tempData = removedTasks;
  }
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
    const items = getTasks();
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
    const item = createTask(todo);
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
      const task = getSpecificTask(target.id);
      const updatedData = { ...task };
      updatedData.status = target.checked ? "completed" : "active";
      updateTask(target.id, updatedData);
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
      deleteTask(target.id);
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
