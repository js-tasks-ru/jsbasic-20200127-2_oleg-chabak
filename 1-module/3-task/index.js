/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // Проверяем что не false, nan, undefined, '', через двойную логическую инверсию
  if (!!str) {
    // Первый символ приводим к верхнему регистру и конкатенируем с подстрокой из str, начиная с 1
    return str[0].toUpperCase() + str.slice(1);
  }
  return '';
}

console.log(ucFirst('t'))
