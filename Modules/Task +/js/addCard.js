import * as components from "./components.js"
import * as localStorageFunctions from "./localStorageFunctions.js"

import {navigate} from "./navigate.js"

//Создание страницы добавления записи
export default function createAddCard(containerEl) {
  const cardEl = components.getCardEl()
  const titleEl = components.getTiteEl("Добавить запись")
  const formEl = components.getFormEl()

  let titleInputEl = components.getInputEl("text", "title", "Название")
  let shelfInputEl = components.getInputEl("text", "shelf", "Полка")
  let weightInputEl = components.getInputEl("number", "weight", "Вес")
  let dataInputEl = components.getInputEl("date", "data", "Время хранения")

  let addButtonEl = components.getButtonEl("Добавить запись")

  formEl.addEventListener("submit", function (event) {
      event.preventDefault()
      const title = titleInputEl.value;
      const shelf = shelfInputEl.value;
      const weight = weightInputEl.value;
      const data = dataInputEl.value;

  const product = {  //создаем объект с фильмом
    title: title,
    shelf: shelf,
    weight: weight,
    data: data,
    id: generateUniquId()
  }
  localStorageFunctions.addItemToLocalStorage(product, "products")
  navigate()
  })

  formEl.append(titleInputEl, shelfInputEl, weightInputEl, dataInputEl, addButtonEl)

  cardEl.append(titleEl, formEl)
  containerEl.append(cardEl)
}

function generateUniquId() {
  const uniqueID = `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  return uniqueID
}