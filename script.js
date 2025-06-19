const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  let task = inputBox.value;
  if(inputBox.value === '') {
    alert("Add a task!")
  } else if(task.length > 32) {
    alert("This task name is too long!")
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function(event) {
  if(event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  }
  else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

document.getElementById("input-box", addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    document.getElementById("task-button").click();
  }
}));



 