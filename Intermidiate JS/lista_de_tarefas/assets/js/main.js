const inputTask = document.querySelector(".input-new-task");
const addTaskButton = document.querySelector(".btn-add-task");
const taskList = document.querySelector(".tasks");

function createTask(text) {
   const li = document.createElement("li");
   li.innerText = text;

   taskList.appendChild(li);
   createDelButton(li);
   saveTasks();
}

function clearInput(input) {
   input.value = "";
   input.focus(); // coloca o foco do mouse no elemento
}

function createDelButton(li) {
   li.innerText += " ";
   const delButton = document.createElement("button");
   delButton.innerText = "Apagar";
   delButton.setAttribute("class", "apagar");
   delButton.setAttribute("title", "Apagar esta tarefa");

   li.appendChild(delButton);
}

function saveTasks() {
   const liTasks = taskList.querySelectorAll("li");
   const taskArray = [];

   for (let task of liTasks) {
      let taskText = task.innerText;
      taskText = taskText.replace("Apagar", "").trim();
      taskArray.push(taskText);
   }

   const tasksJSON = JSON.stringify(taskArray);
   localStorage.setItem("tasks", tasksJSON);
}

function loadSavedTasks() {
   const tasks = localStorage.getItem("tasks");
   const taskList = JSON.parse(tasks);

   for (let task of taskList) {
      createTask(task);
   }
}

loadSavedTasks();

inputTask.addEventListener("keypress", function (e) {
   if (e.keyCode === 13) {
      if (!inputTask.value) return;
      createTask(inputTask.value);
      clearInput(inputTask);
   }
});

addTaskButton.addEventListener("click", function (event) {
   if (!inputTask.value) return;
   createTask(inputTask.value);
   clearInput(inputTask);
});

document.addEventListener("click", function (e) {
   const el = e.target;

   if (el.classList.contains("apagar")) {
      el.parentElement.remove(); // remove o elemento pai
      saveTasks();
   }
});

/*
- Sempre é melhor criar várias funções do que uma função que cuida de tudo;

- element.setAttribute("type", value): define o atributo no elemento com o valor passado;

- event.target.parentElement: retorna o elemento pai do elemento clicado;

- JSON.stringify(array): transforma o array em uma string para guardarem JSON;
- JSON.parse(JSONStr): transforma uma string JSON de volta para um objeto JavaScript;
- localStorage.setItem(name, JSONStr): saves a JSON string in local storage as name;
- localStorage.getItem(name): returns the value of name from local storage;
   

- keypress: quando a tecla é pressionada; -> evento pega qual tecla foi pressionada
- keyup: quando a tecla é pressionada e solta;
- keydown: quando a tecla é pressionada e segurada;
*/

