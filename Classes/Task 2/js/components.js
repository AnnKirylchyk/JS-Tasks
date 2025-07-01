// Получение элемента кнопки
function getButtonEl(text) {
  const buttonEl = document.createElement("button")
  buttonEl.textContent = text
  return buttonEl
}

// Получение элемента заголовка
function getFormTitleEl(text) {
  const titleEl = document.createElement("h2")
  titleEl.textContent = text
  titleEl.classList.add("form__title")
  return titleEl
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
  inputEl.classList.add("form__text-field")
  return inputEl
}

//Получение селекта 
function getSelect() {
  // 1. Создание элемента select
const selectElement = document.createElement('select');
selectElement.classList.add("form__select")

// 2. Создание и добавление option элементов
const option1 = document.createElement('option');
option1.value = 'delivery';
option1.text = 'Доставляется';
selectElement.appendChild(option1);

const option2 = document.createElement('option');
option2.value = 'delivered';
option2.text = 'Доставлен';
selectElement.appendChild(option2);

const option3 = document.createElement('option');
option3.value = 'canceled';
option3.text = 'Отменен';
selectElement.appendChild(option3);

return selectElement
}

export {
  getButtonEl,
  getFormTitleEl,
  getFormEl,
  getInputEl,
  getSelect
}