// import _ from 'lodash';
import 'bootstrap';
import './style.scss';
// import loopTask from './modules/taskList.js';
import TaskList, { lesTaches } from './modules/listOfTasks.js';

const addTask = document.getElementById('addTask');
const input = document.getElementById('input_text');

const completed = false;
const taskList = new TaskList(lesTaches);
// Add Button Event
addTask.addEventListener('click', () => {
  if (!input.value.trim()) {
    addTask.setCustomValidity('Please fill in the task to add in the list.');
    addTask.reportValidity();
  } else {
    taskList.add(input.value, completed);
    taskList.show();
    input.value = '';
  }
});

function component() {
  const element = document.createElement('div');

  taskList.show();
  // loopTask();
  return element;
}

document.body.appendChild(component());