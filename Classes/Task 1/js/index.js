import Delivery from "./Delivery.js"

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11)
];

const app = document.querySelector('.app');

deliveryArr.forEach(element => {
  app.append(element.getDeliveryCard())
});

//deliveryArr[1].name = "Иван"
//eliveryArr[2].address = "ул. Звездная, д.7"
//deliveryArr[0].distance = 120