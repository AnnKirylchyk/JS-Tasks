import Delivery from "./Delivery.js"
import * as components from "./components.js"

export default class EditDelivery extends Delivery {
  constructor(name, address, distance, status = "delivery") {
    super(name, address, distance)
    this.deliveryCard = this.getDeliveryCard();
    this.status = status
  }

  getDeliveryCard() {
    this.deliveryCard = super.getDeliveryCard()
    this.editBtnEl = this.getEditButtonEl()
    this.deliveryCard.append(this.editBtnEl)

    if (this.status == "canceled") {
      this.deliveryCard.classList.add("card--canceled")
    } else if (this.status == "delivered") {
      this.deliveryCard.classList.add("card--delivered")
  }

    return this.deliveryCard
  }

  getEditButtonEl() {
    this.editBtnEl = components.getButtonEl("Изменить")
    this.editBtnEl.classList.add("edit-btn")

    this.editBtnEl.addEventListener("click", () => {
      const formWrap = document.createElement('div');
      formWrap.classList.add('form-wrap')
      const bodyEl = document.querySelector('body');
      bodyEl.append(formWrap)

      const formEl = components.getFormEl()
      formWrap.append(formEl);

      const formTitle = components.getFormTitleEl("Изменить")
      const formInputName = components.getInputEl("text", "name", "Имя")
      formInputName.value = this.name
      const formInputAddress = components.getInputEl("text", "address", "Адрес")
      formInputAddress.value = this.address
      const formInputDistance = components.getInputEl("number", "distance", "Расстояние")
      formInputDistance.value = this.distance
      const formSelect = components.getSelect()
      formSelect.value = this.status
      const formBtn = components.getButtonEl("Сохранить")
      formBtn.classList.add("form__btn")
      formBtn.type = 'submit';
      const cancelBtn = document.createElement('button');
      cancelBtn.classList.add('form__cancelBtn')
      cancelBtn.type = "button"
      cancelBtn.addEventListener("click", () => {
        formWrap.remove()
      })

      formEl.append(formTitle, formInputName, formInputAddress, formInputDistance, formSelect, formBtn, cancelBtn)

      formEl.addEventListener("submit", (event) => {
        event.preventDefault()
        this.name = formInputName.value
        this.address = formInputAddress.value
        this.distance = formInputDistance.value
        this.status = formSelect.value
        formWrap.remove()
      })

      
    })

    return this.editBtnEl
  }

  set status(value) {
    this._status = value
    if (this._status == "canceled") {
      this.deliveryCard.classList.add("card--canceled")
      this.deliveryCard.classList.remove("card--delivered")
    } else if (this._status == "delivered") {
      this.deliveryCard.classList.remove("card--canceled")
      this.deliveryCard.classList.add("card--delivered")
  } else {
      this.deliveryCard.classList.remove("card--canceled")
      this.deliveryCard.classList.remove("card--delivered")
  } 
}

  get status() {
    return this._status
  }
}