const btnEl = document.querySelector('.button');
const resultBlock = document.querySelector('.result');
const inputName = document.querySelector('.input-name');
const inputMail = document.querySelector('.input-mail');
const inputGender = document.querySelectorAll('.input-radio')



const resultList = document.createElement('ul');
resultList.classList.add('result-list');

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', function (e) {
  e.preventDefault()
});

btnEl.addEventListener('click', function () {
  
  if (inputName.validity.valid && inputMail.validity.valid ) {
    resultBlock.innerHTML="";
    resultList.innerHTML="";
    resultBlock.append(resultList)
    const result = document.createElement('h2');
    result.textContent = 'Результаты опроса';
    const liName = document.createElement('li');
    liName.textContent = `Имя пользователя: ${inputName.value}`;
    const liMail = document.createElement('li');
    liMail.textContent = `Email: ${inputMail.value}`;
    const liGender = document.createElement('li');
    resultBlock.prepend(result)
    resultList.append(liName)
    resultList.append(liMail)

    liGender.textContent = `Пол: `;
    resultList.append(liGender)

    inputGender.forEach(element => {
      if (element.checked) {
        const checkedGender = element.value
        liGender.textContent = 'Пол: ' + checkedGender;
        resultList.append(liGender)
      } 
    });

    const range = document.querySelector('.input-range');
    const liRange = document.createElement('li');
    liRange.textContent = `Оценка сервиса: ${range.value}`;
    resultList.append(liRange)

    const liInterests = document.createElement('li');
    const interest = document.querySelectorAll('.input-check');
    const checkedInput = []
    interest.forEach(element => {
      if (element.checked) {
        checkedInput.push(element.value)
      }
    });
    liInterests.textContent = `Интересы пользователей: ${checkedInput}`;
    resultList.append(liInterests)

    const liComments = document.createElement('li');
    const textarea = document.querySelector('.textarea');
    liComments.textContent = `Дополнительные комментарии: ${textarea.value}`;
    resultList.append(liComments)
  }
});