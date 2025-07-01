// Массив массивов пользователей: «имя», «возраст» и «занятие спортом»
const users = [
  ["Alice", 25, true],
  ["Bob", 30, false],
  ["Charlie", 22, true],
  ["David", 27, true],
  ["Eve", 20, false],
  ["Helen", 28, true]
];

const sportUsersOver25 = users.filter(item => item[1] > 25 && item[2] == true)
                              .sort((a, b) => a[1] - b[1])
                              .map(item => item[0])
console.log(sportUsersOver25); // Выведет ["David", "Helen"]