function createCar (object) {
  const car = {
    wheels: 4,
    doors: 4,
    isStarted: false,
  }
  return Object.assign(car,object);
}



console.log(createCar({ name: "Haval", hp: 198 , wheels: 4, isStarted: true, color: "green"}))