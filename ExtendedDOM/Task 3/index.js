function renderList(arr) {
  listEl.innerHTML=""

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = arr[i]
    listEl.append(liEl)
  }
  
}

const btnAscend = document.querySelector('.sortAscending');
const btnDescend = document.querySelector('.sortDescending');
const listEl = document.querySelector('.list');
const prices =  [100, 500, 250, 750, 300];
renderList(prices)

btnAscend.addEventListener('click', function () {
  renderList(prices.sort((a,b) => a-b))
});

btnDescend.addEventListener('click', function () {
  renderList(prices.sort((a,b) => b-a))
});