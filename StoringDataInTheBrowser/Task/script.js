function handleFormSubmit (e) {
  e.preventDefault()

  const title = document.querySelector('#title').value;
  const genre = document.querySelector('#genre').value;
  const releaseYear = document.querySelector('#releaseYear').value;
  const isWatched = document.querySelector('#isWatched').checked;

  const film = {  //создаем объект с фильмом
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched
  }

  alert("Фильм добавлен успешно!")

  addFilmToLocalStorage(film)
}

function addFilmToLocalStorage (film) {
  const films = JSON.parse(localStorage.getItem('films')) || []
  films.push(film)
  localStorage.setItem('films', JSON.stringify(films)) // переводим объект в строку и добавляем в ls

  renderTable()
}

function clearForm() {   // создаем функцию очистки полей формы
  document.querySelector('#title').value = '';
  document.querySelector('#genre').value = '';
  document.querySelector('#releaseYear').value = '';
  document.querySelector('#isWatched').checked = false;
}

function renderTable() {
  clearForm()

  const films = JSON.parse(localStorage.getItem('films')) || []  // переводим строки из ls в объекты и рендерим их

  const filmTableBody = document.querySelector('#film-tbody');

  filmTableBody.innerHTML = ""

  const btnsBlock = document.createElement('div'); // добавляем блок для кнопок обновления и отмены редактирования
  document.querySelector('#film-form').append(btnsBlock);

  films.forEach(film => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${film.title}</td>
    <td>${film.genre}</td>
    <td>${film.releaseYear}</td>
    <td>${film.isWatched ? "Да" : "Нет"}</td>
    <td></td>
    `;

    const changeBtn = document.createElement('button');
    changeBtn.textContent = "Редактировать";
    row.lastElementChild.append(changeBtn)
    changeBtn.style.marginRight = '5px'
    changeBtn.addEventListener('click', function(e) {

      document.querySelector('#title').value = film.title; // подтягиваем в поля значения редактируемого фильма
      document.querySelector('#genre').value = film.genre;
      document.querySelector('#releaseYear').value =  film.releaseYear;
      document.querySelector('#isWatched').checked = film.isWatched;

      document.querySelector('#form-btn').classList.add('hide-button');  // скрываем кнопку добавить

      btnsBlock.innerHTML= "" // очищаем блок кнопок редактирования (чтобы не дублировались)
      const updateBtn = document.createElement('button'); // добавляем кнопку обновить
      updateBtn.textContent = "Обновить";
      btnsBlock.append(updateBtn);
      updateBtn.style.marginRight = '5px'

      updateBtn.addEventListener('click', validate.onSuccess( // добавляем валидацию на редактирование
        function(e){
          const updateFilmIndex = films.indexOf(film); // ищем индекс элемента массива, который надо удалить
          const updateFilm = {
            title: document.querySelector('#title').value,
            genre: document.querySelector('#genre').value,
            releaseYear: document.querySelector('#releaseYear').value,
            isWatched: document.querySelector('#isWatched').checked
          }

          films.splice(updateFilmIndex, 1, updateFilm)  // удаляем фильм из массива объектов и добавляем новый элемент на его место
          //console.log(films);
          localStorage.setItem('films', JSON.stringify(films))  // перезаписываем значение films новым массивом

          renderTable() // выводим измененный список

          clearForm(); // завершение редактирования: очистка полей формы, смена кнопок
          updateBtn.remove()
          cancelBtn.remove()
          document.querySelector('#form-btn').classList.remove('hide-button')
        }
      ))

      const cancelBtn = document.createElement('button'); // добавляем кнопку отменить редактирование
      cancelBtn.textContent = "Отменить редактирование";
      btnsBlock.append(cancelBtn);

      cancelBtn.addEventListener('click', function(e){
        clearForm(); // добавляем событие на отмену редактирования, очистка полей формы, смена кнопок
        updateBtn.remove()
        cancelBtn.remove()
        document.querySelector('#form-btn').classList.remove('hide-button')
      })
    })

    const deleteBtn = document.createElement('button');  // добавляем кнопку удаления строки
    deleteBtn.textContent = "Удалить";
    row.lastElementChild.append(deleteBtn)
    deleteBtn.addEventListener('click', function (e) {
      row.remove()  // удаляем строку из таблицы
      const filmIndex = films.indexOf(film); // ищем индекс элемента массива, который надо удалить
      films.splice(filmIndex, 1)  // удаляем фильм из массива объектов
      localStorage.setItem('films', JSON.stringify(films))  // перезаписываем значение films новым массивом без удаленного фильма
    });

    filmTableBody.appendChild(row)
  });
}

const validate = new window.JustValidate('#film-form');

validate.addField('#title', [
  {
    rule: 'required',
    errorMessage: 'Введите название'
  },
])

validate.addField('#genre', [
  {
    rule: 'required',
    errorMessage: 'Введите жанр'
  },
])

validate.addField('#releaseYear', [
  {
    rule: 'required',
    errorMessage: 'Введите год'
  },
  {
    rule: 'minLength',
    value: 4,
    errorMessage: 'Должен состоять из 4 символов'
  },
  {
    rule: 'maxLength',
    value: 4,
    errorMessage: 'Должен состоять из 4 символов'
  },
])

document.querySelector('#film-form').addEventListener("submit", validate.onSuccess(handleFormSubmit))

renderTable()


// сортировка

const sortForm = document.querySelector('#sort-form');
sortForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const sortType = document.querySelector('#sort-select').value;

  const films = JSON.parse(localStorage.getItem('films'))  // переводим строки из ls в объекты и рендерим их
  //console.log(films[1][sortType]);
  //const sortFilms = films.sort((a, b) => a[sortType] - b[sortType]); // -почему не работает ???
  const sortFilms = films.sort((a, b) => capitalizeFirstLetter(a[sortType]) > capitalizeFirstLetter(b[sortType]) ? 1 : -1);
  localStorage.setItem('films', JSON.stringify(sortFilms)) // переводим объект в строку и добавляем в ls

  renderTable()
});

// Первая буква - заглавная
function capitalizeFirstLetter(value) {
  return String(value).charAt(0).toUpperCase()+String(value).slice(1)
}


