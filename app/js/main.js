const taskInput = document.querySelector('.form-control');
const addBtn = document.querySelector('.btn');

// loading tasks from local storage
window.addEventListener('DOMContentLoaded',(e) => {
    const preLoadedTasks = JSON.parse(localStorage.getItem('tasks-json'));
    if (preLoadedTasks !== null) {
        for (let i = 0 ; i < preLoadedTasks.length ; i++){
    
            const taskDiv = document.createElement('div');
            taskDiv.id = 'tasks-div';
            taskDiv.classList.add('col-12');
            taskDiv.innerHTML = `<p>${preLoadedTasks[i]}</p><div><i id='task-remove' class="bi bi-x"></i></div>`;
            document.querySelector('#tasks-section').appendChild(taskDiv);
            
        }
    }
});


// adding tasks
addBtn.addEventListener('click',() => {
    const task = taskInput.value;
    const taskDiv = document.createElement('div');
    taskDiv.id = 'tasks-div';
    taskDiv.classList.add('col-12');
    let tasks;
    if (task == '') {
        alert('please enter something');
    } else {
        if (JSON.parse(localStorage.getItem('tasks-json')) == null) {
            tasks = [];
            // if tasks 
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks-json'));
            }
    }
    
    tasks.push(task);
    taskDiv.innerHTML = `<p>${task}</p><div><i id="task-remove" class="bi bi-x"></i></div>`;
    taskInput.value = '';
    document.querySelector('#tasks-section').appendChild(taskDiv);
    localStorage.setItem('tasks-json',JSON.stringify(tasks));
});


// removing tasks;
document.body.addEventListener('click',(e) => {
    if (e.target.id == 'task-remove') {
        let newTaskJson = [];
        let selectedTaskVal = e.target.parentElement.parentElement.firstChild.innerHTML;
        let storedTasks = JSON.parse(localStorage.getItem('tasks-json'));
        for (let i = 0 ; i < storedTasks.length; i++){
            if (storedTasks[i] === selectedTaskVal){
                continue
            }
            newTaskJson.push(storedTasks[i]);
        }
        e.target.parentElement.parentElement.remove();
        localStorage.setItem('tasks-json',JSON.stringify(newTaskJson));        
    }
})

