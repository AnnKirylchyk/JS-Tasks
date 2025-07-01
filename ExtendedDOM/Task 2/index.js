const createBtn = document.querySelector('.create');
const deleteBtn = document.querySelector('.delete');
const list = document.querySelector('.list');

createBtn.addEventListener('click', function (e) {
  const listEl = document.createElement('li');
  listEl.textContent = "Новый элемент списка";
  list.append(listEl)
});

deleteBtn.addEventListener('click', function (e) {
  list.lastElementChild.remove();
});