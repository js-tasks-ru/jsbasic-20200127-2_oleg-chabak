/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  // Получаем все строки для работы в переменную
  let tBodyRows = table.tBodies[0].rows;
  // идем циклом по рабочим строкам
  for (row of tBodyRows) {
    // Определяем статус для строки по значению в последней ячейке
    let availableStatus = row.lastElementChild.dataset.available;
    // В зависимости от статуса присваиваем переменной нужный класс (задание 1),
    // потом по этой переменной присвоим класс строке
    if (availableStatus === 'true') {
      availableStatus = 'available';
    } else if (availableStatus === 'false') {
      availableStatus = 'unavailable';
    } else {
      // либо скрываем строку, если нет статуса (задание 2)
      row.hidden = true;
    }
    // Определяем пол для строки по значению в ячейке
    let gender = row.children[2].innerHTML;
    // Аналогично присваиваем в переменную значение пола,
    // потом по этой переменной будем присваивать класс для строки
    if (gender === 'm') {
      gender = 'male';
    } else if (gender === 'f') {
      gender = 'female';
    } else gender = null;
    // Раздаем классы строке. В аргументах названия классов или пусто, в зависимости от условий выше
    row.classList.add(availableStatus, gender);
    // Если значение во второй ячейке < 18, то задаем стиль инлайново, иначе нет.
    row.children[1].innerHTML < 18 ? row.style = 'text-decoration: line-through' : null;
  }
}
