/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  const names = [];
  users.map( (user) => {
    names.push(user.name)
  });
  return names;
}
/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };
let users = [ vasya, petya, masha ];

let names = namify(users); // ['Вася', 'Петя', 'Маша']
console.log(names);
*/
