/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let factorial = 1;
  for (;n > 1; n--) {
    factorial *= n;
  }
  return factorial;
}

console.log(factorial(3));
