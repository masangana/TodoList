
describe('Test edit tasks statut', () => {
    test('Add one task and update his descp', () => {
        const table=[];
        const taskList = new TaskList(table)
        taskList.add('FirstTask', false);
        taskList.updateStatus(1,true)
        expect(taskList.listArray[0].description).toBe(true);
    } )    

})