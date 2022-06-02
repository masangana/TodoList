import Tasks from './taks.js';
import Status from './status.js';

export const lesTaches = JSON.parse(localStorage.getItem('todo_list'));
if (lesTaches === null) {
  localStorage.todo_list = JSON.stringify([]);
  // lesTaches = [JSON.stringify([])];
}

export default class TaskList {
  constructor(taskArray) {
    this.listArray = taskArray;
  }

  // function to show items in the boaard
  show() {
    const listContainer = document.querySelector('.list-cont');
    if (lesTaches === null) {
      if (listContainer) {
        listContainer.innerHTML = '';
        window.location.reload();
      }
    } else {
      if (listContainer) {
        listContainer.innerHTML = '';
      }
      lesTaches.forEach((element) => {
        // const declaration
        const li = [];
        const button = [];
        const buttonCheck = [];
        const textEl = [];
        const input = [];
        //
        li[element.index] = document.createElement('li');
        li[element.index].setAttribute('id', element.index);
        if (element.completed === true) {
          input[element.index] = document.createElement('input');
          input[element.index].setAttribute('type', 'checkbox');
          input[element.index].classList.add('checkbox');
          input[element.index].setAttribute('id', element.index);
          input[element.index].setAttribute('checked', 'checked');
          li[element.index].classList.add('checked');
          buttonCheck[element.index] = document.createElement('button');
          buttonCheck[element.index].setAttribute('id', element.index);
          buttonCheck[element.index].setAttribute('contenteditable', false);
          buttonCheck[element.index].classList.add('check-button');
          buttonCheck[element.index].innerHTML = '<i class="far fa-check-circle"></i>';
        } else {
          input[element.index] = document.createElement('input');
          input[element.index].setAttribute('type', 'checkbox');
          input[element.index].classList.add('checkbox');
          input[element.index].setAttribute('id', element.index);
          buttonCheck[element.index] = document.createElement('button');
          buttonCheck[element.index].setAttribute('id', element.index);
          // li[element.index].setAttribute('contenteditable', true);
          buttonCheck[element.index].classList.add('check-button');
          buttonCheck[element.index].innerHTML = '<i class="far fa-circle"></i>';
        }

        textEl[element.index] = document.createElement('p');
        textEl[element.index].setAttribute('id', `text${element.index}`);
        textEl[element.index].setAttribute('contenteditable', true);
        textEl[element.index].textContent = element.description;
        button[element.index] = document.createElement('button');
        button[element.index].setAttribute('id', `close${element.index}`);
        button[element.index].classList.add('ferme');
        button[element.index].innerHTML = '<i class="fas fa-ellipsis-v"></i>';
        li[element.index].append(input[element.index],
          textEl[element.index], button[element.index]);
        listContainer.append(li[element.index]);

        

        //event listener for clicking
        textEl[element.index].addEventListener('click', () => {
            //get a close button
          const closedButton = document.getElementById(`close${element.index}`);
          closedButton.innerHTML = '<i class="fas fa-trash"></i>';
          closedButton.style.cursor = 'move';
          // remove item
          closedButton.addEventListener('click', () => {
            li[element.index].remove();
            this.remove(element.index - 1);
          });

          // close button
          const autresButton = document.querySelectorAll('.ferme');
          autresButton.forEach((unBoutton) => {
            if (unBoutton.id !== `close${element.index}`) {
              unBoutton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
              closedButton.style.cursor = 'pointer';
            }
          });
        });

        textEl[element.index].addEventListener('mouseleave', () => {
            //button[element.index].innerHTML = '<i class="fas fa-ellipsis-v"></i>';
          //closedButton.style.cursor = 'move';
          //textEl[element.index].removeEventListener('click', f)
          this.update(element.index, textEl[element.index].innerHTML);
        });
       // Checkbox Element
      input[element.index].addEventListener('change', (e) => {
        const status = new Status();
        if (input[element.index].checked) {
          status.checked(lesTaches[element.index-1]);
          console.log(lesTaches[element.index-1].completed);
          this.updateStatus(input[element.index].id, lesTaches[element.index-1].completed)  
          li[element.index].classList.add('checked');
          console.log("Checkbox is checked..");
          console.log(input[element.index].id);
        } else {
          status.unchecked(lesTaches[element.index-1]);
          console.log(lesTaches[element.index-1].completed);
          li[element.index].classList.remove('checked');
          console.log("Checkbox is not checked..");
          console.log(lesTaches);
          this.updateStatus(input[element.index].id, lesTaches[element.index-1].completed)
        }
      });
       
      });
    }
  }

  add(description, completed) {
    const NouvIndex = this.listArray.length + 1;
    const task = new Tasks(description, completed, NouvIndex);
    this.listArray.push(task);
    localStorage.setItem('todo_list', JSON.stringify(this.listArray));
  }

  remove(num) {
    const key = num;
    if (this.listArray.length === 0) {
      this.listArray = [];
      localStorage.setItem('todo_list', JSON.stringify(this.listArray));
      this.show();
    } else {
      this.listArray.splice(key, 1);
      this.listArray.forEach((el, index) => {
        el.index = index + 1;
      });
      localStorage.setItem('todo_list', JSON.stringify(this.listArray));
      this.show();
    }
  }

  update(num, description) {
    if (this.listArray[num - 1].index === Number(num)) {
      this.listArray[num - 1].description = description;
    }
    this.listArray.forEach((el, index) => {
      el.index = index + 1;
    });
    localStorage.setItem('todo_list', JSON.stringify(this.listArray));
    // this.show();
  }

  updateStatus(id, status) {
      console.log('id '+id)
    this.listArray[id-1].status = status;
    localStorage.setItem('todo_list', JSON.stringify(this.listArray));
  }

  clearAll() {
    this.listArray = [];
    localStorage.clear();
    window.location.reload();
  }

    clearAllCompleted = () => {
      this.listArray = this.listArray.filter((element) => element.completed === false);
      this.listArray.forEach((el, index) => {
        el.index = index +1;
      });
      localStorage.setItem('todo_list', JSON.stringify(this.listArray));
      window.location.reload();
    };
}
