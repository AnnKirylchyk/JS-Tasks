import Delivery from "./Delivery.js"
import EditDelivery from "./EditDelivery.js"

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const app = document.querySelector('.app');

deliveryArr.forEach(element => {
  app.append(element.getDeliveryCard())
});

//deliveryArr[2].status = "delivered"

//deliveryArr[1].name = "Иван"
//eliveryArr[2].address = "ул. Звездная, д.7"
//deliveryArr[0].distance = 120