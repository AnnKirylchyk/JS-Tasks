const formEl = document.querySelector('.form');
formEl.addEventListener('submit', function (e) {
  e.preventDefault()
});

const buttonEl = document.querySelector('.btn');
const nameEl = document.querySelector('.input-name');
const weightEl = document.querySelector('.input-weight');
const distanceEl = document.querySelector('.input-distance');

const tBody = document.querySelector('tbody');
const errorBlock = document.querySelector('.error');

buttonEl.addEventListener('click', function (e) {
  if (weightEl.value <= 0 || distanceEl.value <= 0) {
    
    errorBlock.innerHTML=''
    const errorEl = document.createElement('p');
    errorEl.textContent = "Пожалуйста, введите корректные значения для веса и расстояния"
    errorEl.style.color='red'
    errorBlock.prepend(errorEl)
  } else {
    
    const deliveryCost = (weightEl.value * distanceEl.value) / 10 + ' руб.';
    console.log(deliveryCost);
    const tdValues = [nameEl.value, weightEl.value, distanceEl.value, deliveryCost]
    console.log(tdValues);
    const row = document.createElement('tr');
    tBody.append(row)
    for (let i = 0; i < 4; i++) {
      const cell = document.createElement('td');
      cell.textContent = tdValues[i]
      row.append(cell)
    }
    
    errorBlock.innerHTML=''
    formEl.reset()
  }

});