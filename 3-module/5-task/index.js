/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // условие позволяет выбрать алгоритм фильтрации, в зависимости какой аргумент больше,
  // далее фильтруем массив по одному из условий (например num >= a && num <= b)
  // и возвращаем новый массив отфильтрованных чисел
  return a < b ? arr.filter( num => num >= a && num <= b ) : arr.filter( num => num >= b && num <= a );
}

/*

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 8, 8);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
*/
