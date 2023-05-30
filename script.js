const todoList = document.querySelector(".list-container");
const inputBox = document.getElementById("input-box");
const button = document.querySelector(".button");

function addTask() {
    if (inputBox.value == '') {
        alert("Error: You Didn't Write A New Task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

inputBox.addEventListener("keydown", function(e){
    if (e.keyCode == 13) {
        addTask();
    }
})

todoList.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function showTasks() {
    todoList.innerHTML = localStorage.getItem("data");
}

showTasks();

