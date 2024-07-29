const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

let todos = [];

// TODO: What is the purpose of this function?
// showing the todo entry in a table on the webpage
function renderTodos() {
  /** TODO: Describe the functionality of the following two lines of code.
   defaults list to empty string; list starts blank, and every 
   entry adds a line to the to-do list */
  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length; //shows the count of to-do items

  /** TODO: Describe the functionality of the following `for` loop.
   add the to-do to the list as you enter them (for every 
   existing to-do, we create a list item with an index) */
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;
    li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button); //adds a button to the list item
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// initial behavior of app, i.e. what happens at load
function init() {
  // TODO: What is the purpose of the following line of code?
  // grab stored to-dos from local storage and transform from string to object (array)
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  // TODO: Describe the functionality of the following `if` statement.
  // if we have to-dos, re-assign to-dos to the stored to-dos
  // todos on line 6 shouldn't be a CONST
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // show the to-dos on the webpage
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // change to-dos into a string and store them with the key we chose called "todos"
  localStorage.setItem('todos', JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// add a submit action to the form
todoForm.addEventListener('submit', function (event) {
  event.preventDefault(); //prevents the default action i.e. prevents file from reloading and erasing all data
  const todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if the to-do text is an empty string, leave the function (return)
  if (todoText === '') {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  // add to-do as a string to the array
  todos.push(todoText);
  // we manually clear the input field instead of re-loading the page. We have to because the preventDefault prevents us from reloading the page.
  todoInput.value = '';

  // TODO: What will happen when the following functions are called?
  // we store todos, then display them
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// add a click listener to the unordered list
todoList.addEventListener('click', function (event) {
  const element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // only triggered when the element clicked is a button
  if (element.matches('button') === true) {
    // find the element by index
    const index = element.parentElement.getAttribute('data-index');
    // remove it using splice method
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // store the to-dos
    storeTodos();
    // display the to-dos
    renderTodos();
  }
});

init();
