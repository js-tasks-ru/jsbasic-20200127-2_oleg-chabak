/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  return arr.filter( (num) => num >= a && num <= b )

}
/*

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 7);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
*/
