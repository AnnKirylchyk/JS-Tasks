// const catWithGlasses = document.querySelector('.cat-with-glasses');
//     const cat = document.querySelector('.cat');
//     const blackCat = document.querySelector('.black-cat');
//     const bigBlock = document.querySelector('.big-block');

//     function createBigBlock(selectImg) {
//       const url = selectImg.getAttribute('src')
//       const imgEl = document.createElement('img');
//       bigBlock.innerHTML = '';
//       bigBlock.append(imgEl)
//       imgEl.setAttribute('src', url)
//     }

//     catWithGlasses.onclick = function () {
//       createBigBlock(catWithGlasses)
//     }

//     cat.onclick = function () {
//       createBigBlock(cat)
//     }

//     blackCat.onclick = function () {
//       createBigBlock(blackCat)
//     }
const img1 = {
  src: 'img/1.jpg',
  alt: 'Cat with glasses',
  width: 372,
  height: 250
}

const img2 = {
  src: 'img/2.jpg',
  alt: 'Cat',
  width: 372,
  height: 250
}

const img3 = {
  src: 'img/3.jpg',
  alt: 'Black cat',
  width: 372,
  height: 250
}

const imgs = [img1, img2, img3]

const listEl = document.querySelector('.gallery-list');

const bigBlock = document.querySelector('.big-block');

imgs.forEach(element => {
  const imgEl = document.createElement('img');
  const liEl = document.createElement('li');
  listEl.append(liEl);
  liEl.append(imgEl);
  imgEl.setAttribute('src', element.src);
  imgEl.setAttribute('alt', element.alt);
  imgEl.setAttribute('width', element.width);
  imgEl.setAttribute('height', element.height)

  imgEl.addEventListener('click', function (e) {
    const bigImg = document.createElement('img');
    bigBlock.innerHTML = '';
    bigBlock.append(bigImg)
    const url = imgEl.getAttribute('src')
    bigImg.setAttribute('src', url)
  });
});