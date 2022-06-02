import Tasks from "./taks";

export let lesTaches = JSON.parse(localStorage.getItem('todo_list'));
if (lesTaches === null) {
    localStorage.todo_list= JSON.stringify([]);
    //lesTaches = [JSON.stringify([])];
}

console.log(lesTaches)
console.log(localStorage.lesActivites)

export default class TaskList {
    constructor(taskArray){
        this.listArray = taskArray;
    }

    //function to show items in the boaard
    show(){
        const listContainer = document.querySelector('.list-cont');
        if (lesTaches === null) {
            if (listContainer) {
                listContainer.innerHTML = '';
                location.reload();
            }
        } else {
            if (listContainer) {
                listContainer.innerHTML = '';
            }
            console.log('les taches '+ lesTaches)
            lesTaches.forEach((element) =>{
                //const declaration
                const li = [];
                const button = [];
                const buttonCheck = [];
                const textEl = [];
                //
                li[element.index] = document.createElement('li');
                li[element.index].setAttribute('id', element.index);
                if (element.completed === true) {
                li[element.index].classList.add('checked');
                buttonCheck[element.index] = document.createElement('button');
                buttonCheck[element.index].setAttribute('id', element.index);
                buttonCheck[element.index].setAttribute('contenteditable', false);
                buttonCheck[element.index].classList.add('check-button');
                buttonCheck[element.index].innerHTML = '<i class="far fa-check-circle"></i>';
                } else {
                buttonCheck[element.index] = document.createElement('button');
                buttonCheck[element.index].setAttribute('id', element.index);
                li[element.index].setAttribute('contenteditable', true);
                buttonCheck[element.index].classList.add('check-button');
                buttonCheck[element.index].innerHTML = '<i class="far fa-circle"></i>';
                }
    
                textEl[element.index] = document.createElement('label');
                textEl[element.index].setAttribute('id', element.index);
                textEl[element.index].textContent = element.description;
                button[element.index] = document.createElement('button');
                button[element.index].setAttribute('id', element.index);
                button[element.index].innerHTML = '<i class="fas fa-ellipsis-v"></i>';
                li[element.index].append(buttonCheck[element.index], textEl[element.index], button[element.index]);
                listContainer.append(li[element.index]);
    
                // Edit P Element
                textEl[element.index].addEventListener('click', (elementKid) => {
                    elementKid.target.nextSibling.innerHTML = '<i class="fas fa-trash"></i>';
                    elementKid.target.nextSibling.style.cursor = 'pointer';
                    // Remove List Element
                    elementKid.target.nextSibling.addEventListener('click', () => {
                    li[element.index].remove();
                    this.remove(element.index);
                    });
               });
    
                li[element.index].addEventListener('mouseleave', (elementKid) => {
                    button[element.index].innerHTML = '<i class="far fa-trash-alt"></i>';
                    this.update(elementKid.target.id, elementKid.target.innerText);
                  });
    
                  buttonCheck[element.index].addEventListener('change', (elementKid) => {
                    const status = new Status();
                    if (elementKid.target.checked === true) {
                        status.checked(this.listArray[element.index]);
                    } else {
                        status.unchecked(this.listArray[element.index]);
                    }
                    this.update(elementKid.target.nextSibling.id, elementKid.target.nextSibling.innerText);
                });
    
                // Update Checkbox
                if (this.listArray[element.index].completed === true) {
                    buttonCheck[element.index].setAttribute('checked', 'checked');
                    li[element.index].classList.add('checked');
                } else if (this.listArray[element.index].completed === false) {
                    buttonCheck[element.index].removeAttribute('checked');
                    li[element.index].classList.remove('checked');
                }
            } )
        }
        
        
    }

    add(description, completed, index) {
        const task = new Tasks(description, completed, index);
        this.listArray.push(task);
        localStorage.setItem('todo_list', JSON.stringify(this.listArray));
      }
    
    remove(num) {
        const key = num;
        if (this.listArray.length === 1) {
            this.listArray = [];
        } else {
            this.listArray.splice(key, 1);
        }
        this.listArray.forEach((el, index) => {
            el.index = index;
        });
        localStorage.setItem('todo_list', JSON.stringify(this.listArray));
        this.display();
    }
    
    update(num, description) {
        if (this.listArray[num].index === Number(num)) {
            this.listArray[num].description = description;
        }
        this.listArray.forEach((el, index) => {
            el.index = index;
        });
        localStorage.setItem('todo_list', JSON.stringify(this.listArray));
        this.show();
    }
    
    clearAll() {
        this.listArray = [];
        localStorage.clear();
        window.location.reload();
    }
    
    clearAllCompleted = () => {
        this.listArray = this.listArray.filter((element) => element.completed === false);
        this.listArray.forEach((el, index) => {
            el.index = index;
        });
        localStorage.setItem('todo_list', JSON.stringify(this.listArray));
        window.location.reload();
    };
}
