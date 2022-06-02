// Tasks Array
const listArray = [
  {
    description: 'Task 1',
    completed: false,
    index: '0',
  },
  {
    description: 'Task 2',
    completed: false,
    index: '1',
  },
  {
    description: 'Task 3',
    completed: true,
    index: '3',
  },
  {
    description: 'Task 4',
    completed: false,
    index: '4',
  },
];

const loopTask = () => {
  const listContainer = document.querySelector('.list-cont');
  const sorted = listArray.sort((a, b) => (a.index < b.index ? 1 : -1));
  sorted.forEach((el) => {
    const li = [];
    const button = [];
    const buttonCheck = [];
    // const input = [];
    li[el.index] = document.createElement('li');
    li[el.index].setAttribute('id', el.index);
    if (el.completed === true) {
      li[el.index].classList.add('checked');
      buttonCheck[el.index] = document.createElement('button');
      buttonCheck[el.index].setAttribute('id', el.index);
      buttonCheck[el.index].setAttribute('contenteditable', false);
      buttonCheck[el.index].classList.add('check-button');
      buttonCheck[el.index].innerHTML = '<i class="far fa-check-circle"></i>';
    } else {
      buttonCheck[el.index] = document.createElement('button');
      buttonCheck[el.index].setAttribute('id', el.index);
      li[el.index].setAttribute('contenteditable', true);
      buttonCheck[el.index].classList.add('check-button');
      buttonCheck[el.index].innerHTML = '<i class="far fa-circle"></i>';
    }

    const label = document.createElement('label');
    label.setAttribute('id', el.index);
    label.textContent = el.description;
    button[el.index] = document.createElement('button');
    button[el.index].setAttribute('id', el.index);
    button[el.index].innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    li[el.index].append(buttonCheck[el.index], label, button[el.index]);
    listContainer.append(li[el.index]);
  });
};

export default loopTask;