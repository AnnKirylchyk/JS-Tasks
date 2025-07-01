function renderList(arr) {
  listEl.innerHTML=""

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `${i+1}) ${arr[i]}`
    listEl.append(liEl)
  }
  
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      if (arr[j]>arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

const buyerBusket = ['Арбуз', 'Книга', 'Кофе', 'Макароны', 'Молоко', 'Сахар', 'Яблоки']

const addBtn = document.createElement('button');
addBtn.textContent = 'Добавить товар'
document.body.append(addBtn)
addBtn.classList.add('btn', 'btn--green')
addBtn.onclick = function() {
  const addProduct = prompt('Введите название товара')
  const addProductChange = addProduct.toLowerCase();
  const firstLetter = addProductChange.charAt(0);
  const upperFirstLetter = firstLetter.toUpperCase();
  const sliceAddProductChange = addProductChange.slice(1);
  const resultAddProduct = upperFirstLetter + sliceAddProductChange;


  if (resultAddProduct == '') {
    alert('Название товара не введено!')
  } else if (resultAddProduct == null) {
    alert('Название товара не введено!')
  }
  else {
    buyerBusket.push(resultAddProduct)
    sort(buyerBusket)
    renderList(buyerBusket)
  }
}

const listEl = document.createElement('ul');
listEl.classList.add('list-reset')
document.body.append(listEl)

renderList(buyerBusket)