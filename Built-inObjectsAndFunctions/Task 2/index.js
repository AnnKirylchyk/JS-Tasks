// Вспомогательная функция для получения данных из куки
function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    acc[name] = value
    return acc
  }, {})
}

const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%"
}

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__input');

textEl = document.createElement('p');
textEl.classList.add('promo-text')
textEl.textContent = 'Промокод применен. '+ promocodeObj.gift;

const cookie = getCookie() // Получение данных

  if (cookie.promocode) {
    inputEl.setAttribute('value', cookie.promocode)
    inputEl.style.color = 'green';
    formEl.append(textEl)
  }

formEl.addEventListener('submit', function (e) {
  e.preventDefault()

  if (inputEl.value == promocodeObj.promocode) {
    inputEl.style.color = 'green';
    formEl.append(textEl)
    document.cookie = 'promocode='+ promocodeObj.promocode
    
  } else {
    inputEl.style.color = 'unset';
    textEl.remove()
  }
});