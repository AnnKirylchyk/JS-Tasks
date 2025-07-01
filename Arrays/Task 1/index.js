function renderList(arr) {
  listEl.innerHTML=""

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `${i+1}) ${arr[i]}`
    listEl.append(liEl)
  }
  
}

function find(arr,search) {
  let result = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===search) {
      result = i
      break
    }
  }

  return result
}

const bookList = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин колец', 'Дюна']

const addBtn = document.createElement('button');
addBtn.textContent = 'Добавить книгу'
document.body.append(addBtn)
addBtn.classList.add('btn', 'btn--green')
addBtn.onclick = function() {
  const addBook = prompt('Введите название книги')
  if (addBook == '') {
    alert('Название книги не введено!')
  } else if (addBook == null) {
    alert('Название книги не введено!')
  }
  else {
    bookList.push(addBook)
    renderList(bookList)
  }
}

const foundBtn = document.createElement('button');
foundBtn.textContent = 'Найти'
document.body.append(foundBtn)
foundBtn.classList.add('btn', 'btn--blue')
foundBtn.onclick = function() {
  const foundBook = prompt ('Введите название книги')
  const findIndex = find(bookList, foundBook)
  for (let i = 0; i < bookList.length; i++) {
    document.querySelector(`li:nth-child(${i+1})`).classList.remove('item-found')
  }

  if (findIndex>-1) {
    document.querySelector(`li:nth-child(${findIndex+1})`).classList.add('item-found')
  } else {
    alert("Книга не найдена")
  }
}

const listEl = document.createElement('ul');
listEl.classList.add('list-reset')
document.body.append(listEl)

renderList(bookList)