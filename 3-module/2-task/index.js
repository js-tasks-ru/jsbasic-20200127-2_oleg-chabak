/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // Формируем массив из строки
  const numbers = str
  // наполняем массив значениями, по разделителю пробел или запятая
    .split(/[ |,]+/)
    // каждый элемент приводим к числу
    .map( word => word * 1 )
    // если не число то не проходит фильтрацию
    .filter( num => !isNaN(num));
  console.log(numbers);
  // numbers к этому моменту наполнился числами
  // объект с результатом, пока заглушка из первых значений массива numbers
  // нули нельзя ставить, т.к. в массиве может не быть отрицательных чисел
  let result = { min: numbers[0], max: numbers[0] };
  // проходимся циклом по получившемуся массиву numbers
  for (num of numbers) {
    // если слева верно, то вычисление перейдет и в правую часть,
    // где запишет новое актуальное значение в объект с результатами
    num > result.max && (result.max = num);
    num < result.min && (result.min = num);
  }
  return result
}

// const inputData = '1, -5.8 или 10, хотя 34 +  ,     , 0  -5.3 и 73';
// console.log(getMinMax(inputData));
