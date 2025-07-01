import * as components from "./components.js"
import * as localStorageFunctions from "./localStorageFunctions.js"

import { navigate } from "./navigate.js"

//Создание страницы редактирования записи
export default function createEditCard(containerEl) {
  const cardEl = components.getCardEl()
  const wrapEl = components.getCenterWrapEl()
  wrapEl.classList.add("wrap--small")
  const titleEl = components.getTiteEl("Редактирование записи")
  const cancelButtonEl = components.getButtonEl("Отменить редактирование")
  cancelButtonEl.addEventListener("click", function (e) {
    navigate()
  })
  wrapEl.append(titleEl, cancelButtonEl)
  const formEl = components.getFormEl()

  let titleInputEl = components.getInputEl("text", "title", "Название")
  let shelfInputEl = components.getInputEl("text", "shelf", "Полка")
  let weightInputEl = components.getInputEl("number", "weight", "Вес")
  let dataInputEl = components.getInputEl("date", "data", "Время хранения")

  let saveButtonEl = components.getButtonEl("Сохранить изменения")

  const editProduct = localStorageFunctions.getDataFromLC("editProduct")

  titleInputEl.value = editProduct.title; // подтягиваем в поля значения редактируемого предмета
  shelfInputEl.value = editProduct.shelf;
  weightInputEl.value = editProduct.weight;
  dataInputEl.value = editProduct.data;
  formEl.addEventListener("submit", function (event) {
    event.preventDefault()
    const editProduct = localStorageFunctions.getDataFromLC("editProduct")
    const products = localStorageFunctions.getDataFromLC("products")
    console.log(editProduct.id)
    console.log(products)
    const editedProduct = {
      title: titleInputEl.value,
      shelf: shelfInputEl.value,
      weight: weightInputEl.value,
      data: dataInputEl.value,
      id: editProduct.id
    }
    products.forEach(element => {
      if (element.id == editProduct.id) {
        const updateProductIndex = products.indexOf(element)
        products.splice(updateProductIndex, 1, editedProduct)  // удаляем предмет из массива объектов и добавляем новый элемент на его место
        localStorageFunctions.setItemLc("products", products)  // перезаписываем значение products новым массивом
        navigate()
      }
    });
  })

  formEl.append(titleInputEl, shelfInputEl, weightInputEl, dataInputEl, saveButtonEl)

  cardEl.append(wrapEl, formEl)
  containerEl.append(cardEl)
}