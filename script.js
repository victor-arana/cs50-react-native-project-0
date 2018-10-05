const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  addToDo();  
}

function addToDo(){
  // 1. Create new li element.
  const toDo = document.createElement('li');
  // 1.1. Add text to the new li element.
  toDo.textContent = 'New TODO element';
  // 2. Grab a reference to the todo-list.
  // 3. Add the new element to the todo-list.
  list.appendChild(toDo);
}
