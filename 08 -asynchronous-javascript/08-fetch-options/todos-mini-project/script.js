const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(`${apiUrl}?_limit=10`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    });
};

const addTodoToDom = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  // use dataset to store data
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    div.classList.add("done");
  }

  document.querySelector("#todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  const input = document.querySelector("#title").value;
  // const input = e.target.firstElementChild.value;
  console.log(input);

  const newTodo = {
    title: input,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => addTodoToDom(data));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    console.log(e.target.dataset.id, e.target.classList.contains("done"));
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  // get todos
  document.addEventListener("DOMContentLoaded", getTodos);

  // create todo
  document.querySelector("#todo-form").addEventListener("submit", createTodo);

  // update todo
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);

  // delete todo
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

init();
