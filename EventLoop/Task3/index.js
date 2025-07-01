const catsBlock = document.querySelector('.cats');
const dogsBlock = document.querySelector('.dogs');

// Получение элемента img
function getImg(src) {
  const imgEl = document.createElement('img');
  imgEl.src = src;
  imgEl.alt = "Изображение галлереи"
  return imgEl
}

// Функция получения рандомного числа
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


// Функция прогресс бара
const progress = (time, progressBarId, timerId) => {
  const progressBar = document.querySelector(`#${progressBarId}`)
  const timer = document.querySelector(`#${timerId}`);
  progressBar.style.transition = `transform linear ${time}s`;
  progressBar.style.transform = 'scaleX(1)';
  let count = 0;
  timer.textContent = `${count} с`
  const timeInterval = setInterval(() => {
    ++count
    timer.textContent = `${count} с`
  }, 1000);

  setTimeout(() => {
    clearInterval(timeInterval)
  }, time * 1000);
}

const catsRandom = randomInteger(2, 5)
console.log(`Кошачий рандом ${catsRandom}`);

const dogsRandom = randomInteger(2, 5)
console.log(`Собачий рандом ${dogsRandom}`);

function getCatsImagesPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        'images/cat1.jpg',
        'images/cat2.jpg',
        'images/cat3.jpg'
      ]);
    }, (catsRandom * 1000));
  });
}

window.onload = () => {

  progress(catsRandom, 'catsProgress-bar', 'catsProgress-time')

  getCatsImagesPromise().then(function (catsSrc) {
    catsSrc.forEach(src => {
      const imgItem = getImg(src);
      catsBlock.append(imgItem)
    });

    progress(dogsRandom, 'dogsProgress-bar', 'dogsProgress-time')

    function getDogsImagesPromise() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'images/dog1.jpg',
            'images/dog2.jpg',
            'images/dog3.jpg'
          ]);
        }, (dogsRandom * 1000));
      });
    }

    getDogsImagesPromise().then(function (dogsSrc) {
      dogsSrc.forEach(src => {
        const imgItem = getImg(src);
        dogsBlock.append(imgItem)
      });
    })
  })
}
