const todolist = [];

document.forms['todoForm'].onsubmit = function (event) {
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    console.log(todolist);
};