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
// Напишите функцию getCar, которая:
// принимает в себя параметр с маркой автомобиля;

function getCar (carName) {
  let foundCar = ""
  const nameCars = Object.keys(cars)
  nameCars.forEach(element => {
    
    if (element === carName.toLowerCase()) {
      foundCar = element
      console.log(foundCar);
    } 
  })
  
  if (foundCar === "") {
    console.log("Автомобиль не найден")
    };
}

// если автомобиль найден, то возвращает объект авто;
// если нет, то выводит сообщение, что авто не найдено.

getCar("Lada")