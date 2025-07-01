import Delivery from "./Delivery.js"
import EditDelivery from "./EditDelivery.js"
import * as components from "./components.js"

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
//deliveryArr[2].address = "ул. Звездная, д.7"
//deliveryArr[0].distance = 120


const appBtnEl = document.querySelector('.app-btn');
appBtnEl.classList.add('app-btn')

const distanceBtn = components.getButtonEl("Общее расстояние")
distanceBtn.classList.add("distance-btn")
const textEl = document.createElement('p');
textEl.classList.add("text-distance")
appBtnEl.append(distanceBtn, textEl)

distanceBtn.addEventListener("click", () => {
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr)
  console.log(totalDistance);
  textEl.textContent = `Общее расстояние: ${totalDistance} км`
})