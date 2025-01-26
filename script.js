// Get elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task to the list
addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  // Create new list item
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  listItem.innerHTML = `
    <span>${task}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Add delete functionality
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  // Add to list
  todoList.appendChild(listItem);

  // Clear input field
  todoInput.value = '';
});
