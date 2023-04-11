// Form ve liste elementlerini al
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Todoları local storage'dan getir
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// Todoları sayfaya ekle
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Sil';
    li.appendChild(deleteBtn);

    // Sil butonuna tıklanınca todo'yu sil
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
    });
  });
}

renderTodos();

// Form submit edildiğinde yeni todo ekle
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    renderTodos();
  }
});