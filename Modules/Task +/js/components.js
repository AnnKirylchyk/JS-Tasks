//Получение шапки таблицы
function getTableHead() {
  const tableEl = document.createElement("table");
  tableEl.classList.add("table")
  tableEl.innerHTML = `
    <thead>
      <th><button class="btn-table" data-name="title"> Название </button></th>
      <th><button class="btn-table" data-name="shelf"> Полка </button></th>
      <th><button class="btn-table" data-name="weight"> Вес </button></th>
      <th><button class="btn-table" data-name="data"> Время хранения </button></th>
      <th></th>
    </thead>
    `;
  return tableEl
}

// Получение элемента карточки
function getCardEl() {
  const cardEl = document.createElement("div")
  cardEl.classList.add("card")
  return cardEl
}

// Получение элемента заголовка
function getTiteEl(text) {
  const titleEl = document.createElement("h1")
  titleEl.textContent = text
  titleEl.classList.add("main-title")
  return titleEl
}

// Получение элемента блока для центрирования
function getCenterWrapEl() {
  let buttonsWrapEl = document.createElement("div")
  buttonsWrapEl.classList.add("center-wrap")
  return buttonsWrapEl
}

// Получение элемента блока для кнопок
function getBtnWrapEl() {
  let btnsWrapEl = document.createElement("div")
  btnsWrapEl.classList.add("btn-wrap")
  return btnsWrapEl
}

// Получение элемента кнопки
function getButtonEl(text) {
  const buttonEl = document.createElement("button")
  buttonEl.textContent = text
  buttonEl.classList.add("btn")
  return buttonEl
}

// Получение элемента формы
function getFormEl() {
  const formEl = document.createElement("form")
  formEl.classList.add("form")
  return formEl
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
  const inputEl = document.createElement("input")
  inputEl.type = type
  inputEl.name = name
  inputEl.placeholder = placeholder
  inputEl.setAttribute('required', 'true');
  inputEl.classList.add("text-field")
  return inputEl
}

//Получение элемента loader
function getLoaderEl() {
  const loaderEl = document.createElement("div");
  loaderEl.classList.add("loader")
  for (let i=1; i <= 4; i++) {
    const divEl = document.createElement("div");
    loaderEl.append(divEl)
  }

  return loaderEl
}

export {
  getCardEl,
  getTiteEl,
  getCenterWrapEl,
  getButtonEl,
  getFormEl,
  getInputEl,
  getLoaderEl,
  getTableHead,
  getBtnWrapEl
}