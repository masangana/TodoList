// import _ from 'lodash';
import 'bootstrap';
import './style.scss';
import loopTask from './modules/taskList.js';

function component() {
  const element = document.createElement('div');

  loopTask();
  return element;
}

document.body.appendChild(component());