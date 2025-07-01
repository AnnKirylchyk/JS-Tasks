function handleFormSubmit(e){
  e.preventDefault()

  const title = document.querySelector('#title').value;
  const genre = document.querySelector('#genre').value;
  const releaseYear = document.querySelector('#releaseYear').value;
  const isWatched = document.querySelector('#isWatched').checked;

  const film = {
    title,
    genre,
    releaseYear,  // title: title,
    isWatched
  }

  addFilm(film)
}

async function addFilm(film) {
  await fetch('https://sb-film.skillbox.cc/films', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      email: 'ovikk@skillbox.ru'
    },
    body: JSON.stringify(film),
  })

  renderTable()
}

async function renderTable() {
  const response = await fetch('https://sb-film.skillbox.cc/films', {
    headers: {
      email: 'ovikk@skillbox.ru'
    }
  })

  const films = await response.json();
  console.log(films);

  const filmTableBody = document.querySelector('#film-tbody');

  filmTableBody.innerHTML = "";

  films.forEach(film => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${film.title}</td>
    <td>${film.genre}</td>
    <td>${film.releaseYear}</td>
    <td>${film.isWatched ? "Да" : "Нет"}</td>
    <td></td>
    `
    filmTableBody.appendChild(row)

    const deleteBtn = document.createElement('button');  //создаем кнопку удаления фильма
    deleteBtn.textContent = "Удалить";
    row.lastElementChild.append(deleteBtn)
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', function(e){
      deleteFilm(film.id)
    })

  });
}

document.querySelector('#film-form').addEventListener("submit", handleFormSubmit)

renderTable()

async function deleteFilm(id) {
  await fetch (`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: 'ovikk@skillbox.ru'
    }
  })

  renderTable()
}

const deleteAllBtn = document.querySelector('#delete-all'); // создаем событие удаления всех фильмов по клику на кнопку
deleteAllBtn.addEventListener('click', deleteAllFilms)

async function deleteAllFilms() {
  await fetch (`https://sb-film.skillbox.cc/films`, {
    method: "DELETE",
    headers: {
      email: 'ovikk@skillbox.ru'
    }
  })

  renderTable()
}

// фильтрация


const filterTitle = document.querySelector('#filter-title');
const filterGenre = document.querySelector('#filter-genre');
const filterYear = document.querySelector('#filter-releaseYear');
const filterIsWatched = document.querySelector('#filter-isWatched')

async function filter() {

  const title = filterTitle.value;
  const genre = filterGenre.value;
  const releaseYear = filterYear.value;
  const isWatched = filterIsWatched.value
//
  const response = await fetch(`https://sb-film.skillbox.cc/films?title=${title}&genre=${genre}&releaseYear=${releaseYear}&isWatched=${isWatched}`, {
    headers: {
      email: 'ovikk@skillbox.ru'
    }
  })

  const films = await response.json();
  console.log(films)

  const filmTableBody = document.querySelector('#film-tbody');

  filmTableBody.innerHTML = "";

  films.forEach(film => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${film.title}</td>
    <td>${film.genre}</td>
    <td>${film.releaseYear}</td>
    <td>${film.isWatched ? "Да" : "Нет"}</td>
    <td></td>
    `
    filmTableBody.appendChild(row)

    const deleteBtn = document.createElement('button');  //создаем кнопку удаления фильма
    deleteBtn.textContent = "Удалить";
    row.lastElementChild.append(deleteBtn)
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', function(e){
      deleteFilm(film.id)
    })
})
}

document.querySelector('#filter-title').addEventListener('input', filter)
document.querySelector('#filter-genre').addEventListener('input', filter)
document.querySelector('#filter-releaseYear').addEventListener('input', filter)
document.querySelector('#filter-isWatched').addEventListener('change', filter)

// валидация 
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
