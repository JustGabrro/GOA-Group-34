const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTasks);

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    taskList.innerHTML = '';
});

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach((li) => {
        tasks.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(taskText) {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.textContent = taskText;
    btn.textContent = 'Remove';

    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(btn);
    taskList.appendChild(li);
    saveTasks();
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => addTask(task));
}
