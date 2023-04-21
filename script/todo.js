const toDoForm = document.querySelector('#todo');
const toDOInput = document.querySelector('#todo-insert');
const toDoUl = document.querySelector('#todo-ul');
let toDos = [];
const TODOS_KEY = 'todos';
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(setToDo);
}

toDoForm.addEventListener("submit", event => {
    event.preventDefault();
    const newTodo = {};
    newTodo.li = toDOInput.value;
    newTodo.id = Date.now();
    toDOInput.value = '';
    toDos.push(newTodo);
    saveToDo(newTodo);
    setToDo(newTodo);
});

function setToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const del_btn = document.createElement('button');
    li.id = newTodo.id;
    span.innerText = newTodo.li;
    del_btn.innerText = '🗑';
    del_btn.setAttribute('type','button');
    del_btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(del_btn);
    toDoUl.appendChild(li);
}

function deleteToDo(event) {
    const targetLi = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(targetLi.id));
    targetLi.remove();
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}