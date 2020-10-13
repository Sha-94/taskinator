
var tasksToDoEl = document.querySelector(".task-list");
var formEl = document.querySelector("#task-form");
formEl.addEventListener("submit", createTaskHandler);

function createTaskHandler(event){
    event.preventDefault();
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}