const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "/img/discount.svg"
  },
  {
    title: "Скидка 10% на всё!",
    icon: "/img/discount_2.svg"
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "/img/gift.svg"
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "/img/delivery.svg"
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "/img/discount_3.svg"
  }
]

function randomFromInterval (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomNumber = randomFromInterval(0,4)
console.log(randomNumber);

const popup = document.querySelector('.popup');
const img = document.querySelector('.popup__img');
const title = document.querySelector('.popup__title');
title.textContent = giftArr[randomNumber].title
img.setAttribute('src', giftArr[randomNumber].icon)

window.setTimeout(() => {
  popup.classList.add('popup--open')
}, 3000);

const btn = document.querySelector('.popup__btn');
btn.addEventListener('click', function (e) {
  popup.classList.remove('popup--open')
});