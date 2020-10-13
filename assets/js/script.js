
var listEl = document.querySelector(".task-list");
var addTaskButtonEl = document.querySelector("#save-task");
addTaskButtonEl.addEventListener("click", createTaskHandler);

function createTaskHandler(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    listEl.appendChild(listItemEl);
}