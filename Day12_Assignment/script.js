let pendingTasks = [];
let completedTasks = [];

// Show a quick success/error message
function showMessage(msg) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = msg;
  setTimeout(() => messageDiv.textContent = '', 2000);
}

// Check input validity to enable/disable button
function checkInput() {
  const input = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  if (input.value.trim() !== '' && input.value.trim().length <= 50) {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
}

// Add new task
function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '' || task.length > 50) {
    showMessage('🚫 Invalid task!');
    return;
  }
  pendingTasks.push(task);
  input.value = '';
  checkInput(); // disable button again
  updateLists();
  showMessage('✅ Task added!');
}

// Mark task as completed
function markCompleted(index) {
  const task = pendingTasks.splice(index, 1)[0];
  completedTasks.push(task);
  updateLists();
}

// Delete task
function deleteTask(listType, index) {
  if (listType === 'pending') {
    pendingTasks.splice(index, 1);
  } else {
    completedTasks.splice(index, 1);
  }
  updateLists();
  showMessage('🗑 Task deleted!');
}

// Update the lists in UI
function updateLists() {
  const pendingList = document.getElementById('pendingList');
  const completedList = document.getElementById('completedList');
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  pendingTasks.forEach((task, index) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => markCompleted(index);

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteTask('pending', index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    pendingList.appendChild(li);
  });

  completedTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'completed';

    const span = document.createElement('span');
    span.textContent = task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.disabled = true;

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => deleteTask('completed', index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    completedList.appendChild(li);
  });
}
