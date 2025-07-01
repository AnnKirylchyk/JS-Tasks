// Получение преобразованых данных по ключу из LocalStorage
function getDataFromLC (key) {
  const value = JSON.parse(localStorage.getItem(key));
  return value
}

//Устанавливаем/перезаписываем значение LocalStorage по ключу
function setItemLc (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

//Добавляем элемент в объект/значение LocalStorage
function addItemToLocalStorage (element, key) {
  const elements = JSON.parse(localStorage.getItem(key)) || []
  elements.push(element)
  localStorage.setItem(key, JSON.stringify(elements)) // переводим объект в строку и добавляем в ls
}

export {
  getDataFromLC,
  setItemLc,
  addItemToLocalStorage
}