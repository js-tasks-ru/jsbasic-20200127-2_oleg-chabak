/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    console.log(salaries[key] + " = ", !isNaN(salaries[key]/1));
    if ( salaries[key] !== null && salaries[key] !== true && !isNaN(salaries[key])){
      sum += salaries[key];
    }
  }
  return sum;
}

/*
let salaries = {
  John: 1000,
  John1: undefined,
  Ann: 1600,
  PAnn: null,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
  PisPayed: true,
  DisPayed: {df:'sdfgs', sdf:234},
  EisPayed: [1,3],
}

console.log(sumSalary(salaries));
*/
