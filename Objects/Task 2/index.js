const cars = {
  bmw: {
    name: "BMW",
    wheels: 4,
    doors: 2,
    isStarted: true,
    hp: 480,
  },
  mercedes: {
    name: "Mercedes",
    wheels: 4,
    doors: 2,
    isStarted: false,
    hp: 465,
  },
  skoda: {
    name: "Skoda",
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 380,
  },
  lada: {
    name: "Lada",
    wheels: 4,
    doors: 4,
    isStarted: true,
    hp: 320,
  }
}

// Напишите функцию, которая выводит по очереди названия всех авто из объекта:


function listCars2 () {
  const nameCars = Object.keys(cars)
  nameCars.forEach(element => {
    console.log(element);
  });
}

listCars2()