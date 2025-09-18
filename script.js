// Part 1: Mastering JavaScript Basics
// Variables and data types
let tasks = []; // Array to store tasks
let showCompletedOnly = false; // Boolean to track filter state

// Function to update task count
function updateTaskCount() {
    const taskCountElement = document.getElementById('taskCount');
    const count = showCompletedOnly ? tasks.filter(task => task.completed).length : tasks.length;
    taskCountElement.textContent = `Total Tasks: ${count}`;
}

// Part 2: JavaScript Functions
// Function to add a new task
function addTask(taskText) {
    if (taskText.trim() === '') {
        alert('Please enter a task!');
        return false;
    }
    tasks.push({ text: taskText, completed: false });
    renderTasks();
    return true;
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
}

// Part 3: JavaScript Loops
// Function to render tasks using a forEach loop
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing list
    
    // Loop through tasks array
    tasks.forEach((task, index) => {
        if (showCompletedOnly && !task.completed) return; // Skip non-completed tasks if filter is on
        
        // Create list item
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        
        // Add click event to toggle completion
        li.addEventListener('click', () => toggleTaskCompletion(index));
        taskList.appendChild(li);
    });
    
    // Update task count using a for loop to count tasks
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (!showCompletedOnly || tasks[i].completed) {
            count++;
        }
    }
    updateTaskCount();
}

// Part 4: Mastering the DOM
// DOM Element selections
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const filterCompletedBtn = document.getElementById('filterCompletedBtn');

// Add task on button click
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (addTask(taskText)) {
        taskInput.value = ''; // Clear input
    }
});

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskText = taskInput.value;
        if (addTask(taskText)) {
            taskInput.value = ''; // Clear input
        }
    }
});

// Toggle filter for completed tasks
filterCompletedBtn.addEventListener('click', () => {
    showCompletedOnly = !showCompletedOnly;
    filterCompletedBtn.textContent = showCompletedOnly ? 'Show All Tasks' : 'Show Completed Only';
    renderTasks();
});

// Initial render
renderTasks();
