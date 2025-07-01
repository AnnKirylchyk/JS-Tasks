function greeting() {
  const username = prompt("Введите имя пользователя");
  return username
}
try {
  let name = greeting();
  if (name == '') {
    const err = new Error ("Имя обязательно для заполнения")
    throw err
  }
} catch(error) {
  alert(error.message);
}