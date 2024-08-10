const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    // TODO: 残りを実装
    this.input = this.shadowRoot.querySelector("input");
    const list = this.shadowRoot.querySelector("#todo-list");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.input.value.trim() === "") {
        return;
      }
      const todo = this.input.value.trim();
      this.input.value = "";

      const li = document.createElement("li");
      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      const label = document.createElement("label");
      li.appendChild(label);
      const destroy = document.createElement("button");
      li.appendChild(destroy);
      destroy.textContent = "✖";

      toggle.addEventListener("change", () => {
        li.classList.toggle("completed", toggle.checked);
      });
      label.textContent = todo;
      destroy.addEventListener("click", () => {
        li.remove();
      });

      list.prepend(li);
    });
  }
}

customElements.define("todo-app", TodoApp);
