const todolist = [
    "Belajar JavaScriprt Dasar",
    "Belajar JavaScript Object Oriented Programming",
    "Belajar JavaScript Document Object Model"
];

function clearTodoList() {
    const todolistBody = document.getElementById("todolistBody");
    while (todolistBody.firstChild) {
        todolistBody.removeChild(todolistBody.firstChild);
    }
}

function removeTodoList(index) {
    todolist.splice(index, 1);
    displayTodoList();
}

function addTodoList(index, todo) {
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Delete";
    buttonDone.onclick = function () {
        removeTodoList(index);
    }
    tdButton.appendChild(buttonDone);
    
    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todolistBody = document.getElementById("todolistBody");
    todolistBody.appendChild(tr);
}

function displayTodoList(){
    clearTodoList();

    for (let index = 0; index < todolist.length; index++) {
        const todo = todolist[index];

        const searchText = document.getElementById("search").value.toLowerCase();

        if (todo.toLowerCase().includes(searchText)) {
            addTodoList(index, todo);
        }
    }
}

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todoInput = document.forms['todoForm']['todo'];
    const todo = todoInput.value.trim(); 

    if (todo !== '') {
        todolist.push(todo);
        todoInput.value = ''; 

        displayTodoList();
    } else {
        alert('Todo tidak boleh kosong!'); 
    }
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
    displayTodoList();
}
searchInput.onkeydown = function () {
    displayTodoList();
}

displayTodoList();