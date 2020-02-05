/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for(key in obj)
  {
    return false;
  }
  return true;
}

var schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

console.log( isEmpty(schedule) ); // false
