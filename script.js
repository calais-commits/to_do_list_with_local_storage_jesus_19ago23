//Initial references
const newTaskInput = document.querySelector("#new-task input");
const taskDiv = document.querySelector("#task");
let deleteTask, editTasks;
var task;
let updateNote = "";
let count;

//Function on window load

window.onload = () =>{
    updateNote = "";
    count = Object.keys(localStorage).length;
    displayTasks();
}

//Function to display the Tasks
const displayTasks = () => {
    if(Object.keys(localStorage).length > 0){
        taskDiv.style.display = "inline-block";
    } else{
        taskDiv.style.display = "none";
    }
}

//Clear the task

taskDiv.innerHTML = "";

//Fetch all the keys in localstorage

var task = Object.keys(localStorage);
task = tasks.sort();

for(let key of tasks){
    let classValue = "";

    //Get all values
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;

    //localstorage would store boolean as tring, so we parse it to boolean back
    let editButtton = document.createElement("button");
    editButtton.classList.add("edit");
    editButtton.innerHTML = `<ion-icon name="create"></ion-icon>`;

    if(!JSON.parse(value)){
        editButtton.style.visibility = "visible";
    } else{
        editButtton.style.visibility = "hidden";
        taskInnerDiv.classList.add("completed");
    }
    taskInnerDiv.appendChild(editButtton);
    taskInnerDiv.innerHTML+=`<button class="delete"><ion-icon name="trash"></ion-icon></button>`;
    taskDiv.appendChild(taskInnerDiv);
}