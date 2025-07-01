const catsBlock = document.querySelector('.cats');
const dogsBlock = document.querySelector('.dogs');

function getImg(src) {
  const imgEl = document.createElement('img');
  imgEl.src = src;
  imgEl.alt = "Изображение галлереи"
  return imgEl
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getCatsImagesPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        'images/cat1.jpg',
        'images/cat2.jpg',
        'images/cat3.jpg'
      ]);
    }, (randomInteger(2, 5) * 1000));
  });
}

function getDogsImagesPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        'images/dog1.jpg',
        'images/dog2.jpg',
        'images/dog3.jpg'
      ]);
    }, (randomInteger(2, 5) * 1000));
  });
}


getCatsImagesPromise()

getDogsImagesPromise()


getCatsImagesPromise().then(function(catsSrc){
  catsSrc.forEach(src => {
    const imgItem = getImg(src);
    catsBlock.append(imgItem)
  });
})

getDogsImagesPromise().then(function(dogsSrc){
  dogsSrc.forEach(src => {
    const imgItem = getImg(src);
    dogsBlock.append(imgItem)
  });
})



// const catsPromise = new Promise (function(resolve){
//   setTimeout(() => {
//     resolve([
//       'images/cat1.jpg',
//       'images/cat2.jpg',
//       'images/cat3.jpg'
//     ]);
//   }, (randomInteger(2, 5) * 1000));
// })

// catsPromise.then(function(catsSrc){
//   catsSrc.forEach(src => {
//     const imgItem = getImg(src);
//     catsBlock.append(imgItem)
//   });
// })


// const dogsPromise = new Promise (function(resolve){
//   setTimeout(() => {
//     resolve([
//       'images/dog1.jpg',
//       'images/dog2.jpg',
//       'images/dog3.jpg'
//     ]);
//   }, (randomInteger(2, 5) * 1000));
// })


// dogsPromise.then(function(dogsSrc){
//   dogsSrc.forEach(src => {
//     const imgItem = getImg(src);
//     dogsBlock.append(imgItem)
//   });
// })
