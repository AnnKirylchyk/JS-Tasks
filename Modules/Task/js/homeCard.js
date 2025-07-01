import { getTableHead } from "./components.js"
import { navigate } from "./navigate.js"
import * as localStorageFunctions from "./localStorageFunctions.js"
import * as components from "./components.js"

// Создание страницы склада
export default function createHomeCard(containerEl) {
  const cardEl = components.getCardEl()
  const wrapEl = components.getCenterWrapEl()
  const titleEl = components.getTiteEl("Склад")
  wrapEl.append(titleEl);

  const addBtn = components.getButtonEl("Добавить запись")
  wrapEl.append(addBtn);

  addBtn.addEventListener("click", function () {
    navigate("add")
  })

  const tableEl = getTableHead()
  const tableBody = renderTable()
  tableEl.append(tableBody)
  cardEl.append(wrapEl, tableEl)
  containerEl.append(cardEl)

  const sortBtns = document.querySelectorAll('.btn-table');

  sortBtns.forEach(sortBtn => {    //создаем кнопку сортировки
    sortBtn.addEventListener('click', function (e) {
      const sortType = sortBtn.dataset.name;
      const products = localStorageFunctions.getDataFromLC("products")  // переводим строки из ls в объекты и рендерим их
      if (sortType == "weight") {
        const sortproducts = products.sort((a, b) => a[sortType] - b[sortType]);
        localStorageFunctions.setItemLc("products", sortproducts) // переводим объект в строку и добавляем в ls
      } else {
        const sortproducts = products.sort((a, b) => capitalizeFirstLetter(a[sortType]) > capitalizeFirstLetter(b[sortType]) ? 1 : -1);
        localStorageFunctions.setItemLc("products", sortproducts) // переводим объект в строку и добавляем в ls
      }
      const tableBody = document.querySelector('tbody');
      tableBody.remove()
      const tableBodySort = renderTable()
      tableEl.append(tableBodySort)
    });
  });

  // Первая буква - заглавная
  function capitalizeFirstLetter(value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1)
  }

}

function renderTable() {
  const products = localStorageFunctions.getDataFromLC("products") || []

  const productsTableBody = document.createElement("tbody");

  productsTableBody.innerHTML = "";

  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${product.title}</td>
    <td>${product.shelf}</td>
    <td>${product.weight}</td>
    <td>${product.data}</td>
    <td></td>
    `;

    const btnWrap = components.getBtnWrapEl()

    const deleteBtn = components.getButtonEl("Удалить")   // добавляем кнопку удаления строки

    deleteBtn.addEventListener('click', function (e) {
      row.remove()  // удаляем строку из таблицы
      const productIndex = products.indexOf(product); // ищем индекс элемента массива, который надо удалить
      products.splice(productIndex, 1)  // удаляем продукт из массива объектов
      localStorageFunctions.setItemLc("products", products)  // перезаписываем значение products новым массивом без удаленного
    });

    row.lastElementChild.append(deleteBtn)

    productsTableBody.appendChild(row)
  });

  return productsTableBody
}
