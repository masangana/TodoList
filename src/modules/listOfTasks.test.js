/**
 * @jest-environment jsdom
 */
import TaskList from './listOfTasks.js';

document.body.innerHTML = '<ul class=\'list-cont\'></ul>';

describe('Test add tasks', () => {
  test('Add one task', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('FirstTask', false);
    expect(taskList.length).not.toBeNull();
  });

  /* Checking one instance of the object */

  test('Check the position', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('Call me', false);
    expect(taskList.listArray[0].description).toEqual('Call me');
  });

  /* Check if the third task is the same one which we added */

  test('Add multiple tasks and return one element', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('Task 0', false);
    taskList.add('Task 1', false);
    taskList.add('Task 2', false);
    taskList.add('Task 3', false);
    expect(taskList.listArray[3].description).toEqual('Task 3');
  });

  /* Check if we have added the same number of itmes in the list */

  test('Add multiple tasks and return the size of the table', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('Task 0', false);
    taskList.add('Task 1', false);
    taskList.add('Task 2', false);
    taskList.add('Task 3', false);
    expect(taskList.listArray.length).toBe(4);
  });
});

describe('Test remove tasks', () => {
  test('Remove one task', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('FirstTask', false);
    taskList.remove(0);
    expect(taskList.length).toBeUndefined();
  });

  test('Add multiple tasks and remove one element, remove one in the middle', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('Task 0', false);
    taskList.add('Task 1', false);
    taskList.add('Task 2', false);
    taskList.add('Task 3', false);
    taskList.remove(1);
    expect(taskList.listArray[1].description).toEqual('Task 2');
  });
});

describe('Test update tasks', () => {
  test('Add one task and update his descpription', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('FirstTask', false);
    taskList.update(1, 'New description');
    expect(taskList.listArray[0].description).toEqual('New description');
  });
});

describe('Test edit tasks status', () => {
  test('Add one task and update his description', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('FirstTask', false);
    taskList.updateStatus(1, true);
    expect(taskList.listArray[0].status).toBeTruthy();
  });

  test('update multiple status', () => {
    const table = [];
    const taskList = new TaskList(table);
    taskList.add('Task 0', false);
    taskList.add('Task 1', false);
    taskList.add('Task 2', false);
    taskList.add('Task 3', false);
    taskList.updateStatus(1, true);
    taskList.updateStatus(2, true);
    taskList.updateStatus(1, false);
    expect(taskList.listArray[0].status).toEqual(false);
  });
});

describe('remove completed task', () => {
    test('remove completed', () => {
      const table = [];
      const taskList = new TaskList(table);
      taskList.add('FirstTask', false);
      taskList.add('Task 2', true);
      taskList.add('Task 3', true);
      taskList.add('Task 4', true);
      taskList.clearAllCompleted();
      expect(taskList.listArray.length).toBe(1);
    });
  
    test('remove one completed', () => {
      const table = [];
      const taskList = new TaskList(table);
      taskList.add('Task 0', false);
      taskList.add('Task 1', true);
      taskList.add('Task 2', true);
      taskList.add('Task 3', false);
      taskList.clearAllCompleted();
      expect(taskList.listArray.length).toBe(2);
    });
  });