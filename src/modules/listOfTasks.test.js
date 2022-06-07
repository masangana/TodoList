/**
 * @jest-environment jsdom
 */
 document.body.innerHTML = '<ul class=\'listContainer\'></ul>';
import TaskList from "./listOfTasks";

describe('Test add tasks', () => {

    test('Add one task', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('FirstTask', false);
        expect(taskList.length).not.toBeNull();
    } )

    test('Check the position', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('Call me', false);
        expect(taskList.listArray[0].description).toEqual('Call me');
    } )

    test('Add multiple tasks and return one element', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('Task 0', false);
        taskList.add('Task 1', false);
        taskList.add('Task 2', false);
        taskList.add('Task 3', false);
        expect(taskList.listArray[3].description).toEqual('Task 3');
    } )

    test('Add multiple tasks and retur the size of the table', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('Task 0', false);
        taskList.add('Task 1', false);
        taskList.add('Task 2', false);
        taskList.add('Task 3', false);
        expect(taskList.listArray.length).toBe(4);
    } )
})

describe('Test remove tasks', () => {

    test('Add one task', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('FirstTask', false);
        taskList.remove(0)
        expect(taskList.length).toBeUndefined();
    } )

    test('Add multiple tasks and remove one element, remove one in the middle', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('Task 0', false);
        taskList.add('Task 1', false);
        taskList.add('Task 2', false);
        taskList.add('Task 3', false);
        taskList.remove(1)
        expect(taskList.listArray[1].description).toEqual('Task 2');
    } )
})