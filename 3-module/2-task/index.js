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
  // numbers к этому моменту наполнился числами
  // вставляем в объект с результатом мин и макс
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}

const inputData = '1, -5.8 или 10, хотя 34 +  ,     , 0  -5.3 и 73';
console.log(getMinMax(inputData));
