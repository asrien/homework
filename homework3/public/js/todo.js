document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const addButton = document.querySelector(".add-btn");
  let counter = 1; // 투두리스트 개수를 세는 변수

  function addTodoItem(text) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span class="todo-text">${text}</span>
      <button class="delete-btn">X</button>
    `;
    todoList.appendChild(li);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text !== "") {
      addTodoItem(text);
      input.value = "";
    }
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("delete-btn")) {
      const listItem = target.closest("li");
      listItem.remove();
    }
  });
});
