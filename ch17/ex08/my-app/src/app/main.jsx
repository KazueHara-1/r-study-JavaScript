"use client";
import { useState } from "react";

export default function Main() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const submit = () => {
    const newTaskName = taskName.trim();
    // new-todo の中身は空にする
    const newTaskList = [...taskList];
    newTaskList.push({ name: newTaskName, isDone: false });
    setTaskName("");
    setTaskList(newTaskList);
  };
  return (
    <>
      <form id="new-todo-form">
        <input
          type="text"
          id="new-todo"
          placeholder="What needs to be done?"
          className="border-2 p-1"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="button"
          className="ml-2 p-1 bg-gray-600 text-white"
          onClick={submit}
        >
          Add
        </button>
      </form>
      <ul id="todo-list">
        {taskList.map((task, index) => (
          <li key={`task-${index}`}>
            <input
              type="checkbox"
              onClick={() => {
                const newTaskList = [...taskList];
                newTaskList[index].isDone = !newTaskList[index].isDone;
                setTaskList(newTaskList);
              }}
            />
            {task.isDone ? (
              <label className="line-through">{task.name}</label>
            ) : (
              <label>{task.name}</label>
            )}
            <button
              name="❌"
              onClick={() => {
                const newTaskList = [...taskList];
                setTaskList(newTaskList.splice(index, 1));
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
