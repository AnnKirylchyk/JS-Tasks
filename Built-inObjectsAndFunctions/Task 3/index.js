const promocodeArr = [
  {
    promocode: 'PROM10',
    gift: "Скидка 10%"
  },
  {
    promocode: 'PROM50',
    gift: "Скидка 50%"
  },
  {
    promocode: 'GIFT',
    gift: "Подарок в корзине"
  }
]

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form__input');

textEl = document.createElement('p');
textEl.classList.add('promo-text')


formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  inputEl.style.color = 'unset';
  textEl.remove()

  promocodeArr.forEach(element => {
    if (inputEl.value == element.promocode) {
      inputEl.style.color = 'green';
      textEl.innerHTML=''
      textEl.textContent = 'Промокод применен. '+ element.gift;
      formEl.append(textEl)
    }
  });
});