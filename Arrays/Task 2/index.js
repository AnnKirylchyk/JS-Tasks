function renderList(arr) {
  listEl.innerHTML=""

  for (let i = 0; i < arr.length; i++) {
    const liEl = document.createElement('li');
    liEl.textContent = `${i+1}) ${arr[i]}`
    listEl.append(liEl)
  }
  
}

function filter (arr,minHeight) {
  
  const result = []
  for (const item of arr) {
    if (item>=minHeight) {
      result.push(item)
    }
  }
  return result
}

const puplesHeights = [164, 157, 160, 143, 170]

const addBtn = document.createElement('button');
addBtn.textContent = 'Добавить рост'
document.body.append(addBtn)
addBtn.classList.add('btn', 'btn--green')
addBtn.onclick = function() {
  const addHeight = prompt('Введите рост ученика')
  if (addHeight == '') {
    alert('Рост не введен!')
  } else if (addHeight == null) {
    alert('Рост не введен!')
  }
  else {
    puplesHeights.push(addHeight)
    renderList(puplesHeights)
  }
}

const filterBtn = document.createElement('button');
filterBtn.textContent = 'Фильтровать'
document.body.append(filterBtn)
filterBtn.classList.add('btn', 'btn--orange')
filterBtn.onclick = function() {
  const minHeight = prompt ('Введите минимальный рост')
  const result = filter (puplesHeights, minHeight)
  renderList(result)
}

const listEl = document.createElement('ul');
listEl.classList.add('list-reset')
document.body.append(listEl)

renderList(puplesHeights)