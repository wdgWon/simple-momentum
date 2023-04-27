const toDoForm = document.querySelector('#todo');
const toDOInput = document.querySelector('#todo-insert');
const toDoUl = document.querySelector('#todo-ul');
const toDoCheck = toDoForm.querySelector('#todo-hide');
const toDoBoard = toDoForm.querySelector('.todo-board');
let toDos = [];
const TODOS_KEY = 'todos';
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(setToDo);
}

transBoard();
toDoCheck.onclick = transBoard;

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
    span.innerHTML += newTodo.li;
    span.addEventListener("click",listStrikeThrough);
    del_btn.innerText = '❌';
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

function transBoard() {
    const currentHeight = toDos.length;
    const transHeight = toDoCheck.checked ? 0 : 2*currentHeight+10;
    toDoBoard.style.transform = `translateY(-${transHeight}rem)`;
}

function listStrikeThrough(event) {
    event.target.classList.toggle('strike-through');
}

