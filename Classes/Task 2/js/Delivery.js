export default class Delivery {
  _name = ""
  _address = ""
  _distance = 0
  constructor (name, address, distance) {
    this.name = name,
    this.address = address,
    this.distance = distance
  }

  getDeliveryCard() {
    const deliveryCard = document.createElement('div');
    deliveryCard.classList.add("card")

    const nameWrap = document.createElement('div');
    nameWrap.classList.add("card__wrap");
    const nameTitleEl = document.createElement('h2');
    nameTitleEl.classList.add("card__title")
    nameTitleEl.textContent = "Имя"
    this.nameEl = document.createElement('span');
    this.nameEl.classList.add("card__text")
    this.nameEl.textContent = this.name
    nameWrap.append(nameTitleEl, this.nameEl)

    const addressWrap = document.createElement('div');
    addressWrap.classList.add("card__wrap");
    const addressTitleEl = document.createElement('h2');
    addressTitleEl.classList.add("card__title")
    addressTitleEl.textContent = "Адрес"
    this.addressEl = document.createElement('span');
    this.addressEl.classList.add("card__text")
    this.addressEl.textContent = this.address
    addressWrap.append(addressTitleEl, this.addressEl)

    const distanceWrap = document.createElement('div');
    distanceWrap.classList.add("card__wrap");
    const distanceTitleEl = document.createElement('h2');
    distanceTitleEl.classList.add("card__title")
    distanceTitleEl.textContent = "Расстояние"
    this.distanceEl = document.createElement('span');
    this.distanceEl.classList.add("card__text")
    this.distanceEl.textContent = `${this.distance} км`
    distanceWrap.append(distanceTitleEl, this.distanceEl)

    deliveryCard.append(nameWrap, addressWrap, distanceWrap)

    return deliveryCard
  }

  set name(value) {
    this._name = value

    if (this.nameEl) {
      this.nameEl.textContent = this._name
    }
  }

  get name() {
    return this._name
  }

  set address(value) {
    this._address = value

    if (this.addressEl) {
      this.addressEl.textContent = this._address
    }
  }

  get address() {
    return this._address
  }

  set distance(value) {
    this._distance = value

    if (this.distanceEl) {
      this.distanceEl.textContent = `${this._distance} км`
    }
  }

  get distance() {
    return this._distance
  }
}