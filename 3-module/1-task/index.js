/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  // потом сюда будем класть отфильтрованные значения для формирования итоговой строки
  let arr = [];
  data
    // фильтруем объекты по свойству возраст
    .filter( person => person.age <= age)
    //остались только нужные объекты, проходящие по возрасту
    // на каждой итерации собираем в массив строки, содержащие имя и доход из итерируемого объекта
    .map( person => arr.push(`${person.name}, ${person.balance}`));
  // клеим массив в строку с переносом в кач-ве разделителя и возвращаем
  return arr.join('\n');
}

/*
const data = [
  {
    "balance": "$1,825.655555",
    "picture": "http://placehold.it/32x32",
    "age": 211,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 1,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
];

console.log(showSalary(data, 22));
// console.log(showSalary(data, 22))

Golden Branch, $1,825.65
Duncan Randall, $1,490.15
*/
