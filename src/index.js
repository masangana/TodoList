// import _ from 'lodash';
import 'bootstrap';
import './style.scss';
//import loopTask from './modules/taskList.js';
import TaskList from './modules/listOfTasks';

import { lesTaches } from './modules/listOfTasks';

const addTask = document.getElementById('addTask');
const input = document.getElementById('input_text');

let index = 0;
const completed = false;
const taskList = new TaskList(lesTaches);
console.log(lesTaches)
// Add Button Event
addTask.addEventListener('click', () => {
  if (!input.value.trim()) {
    addTask.setCustomValidity('Please fill in the task to add in the list.');
    addTask.reportValidity();
  } else {
    taskList.add(input.value, completed, index);
    taskList.show();
    input.value = '';
    index += 1;
  }
});

function component() {
  const element = document.createElement('div');

  taskList.show()
  return element;
}

document.body.appendChild(component());