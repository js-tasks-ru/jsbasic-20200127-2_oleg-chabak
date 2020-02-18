/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */


  this.el = document.createElement('table');
  this.el.appendChild(document.createElement('thead'));
  this.el.tHead.innerHTML = `<tr>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Salary</td>
                                <td>City</td>
                            </tr>`;
  this.el.appendChild(document.createElement('tbody'));

  for (row of items) {
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `<tr>
                              <td>${row.name}</td>
                              <td>${row.age}</td>
                              <td>${row.salary}</td>
                              <td>${row.city}</td>
                            </tr>`;
    this.el.tBodies[0].append(tableRow);
  }


  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let tableRows = Array.from(this.el.tBodies[0].rows)
      .sort((rowA, rowB) => {

        // проверка на включенный реверс
        if (!desc) {
          // проверка на число или строку
          if (!isNaN(+rowA.cells[column].innerHTML)) {
            return +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? 1 : -1;
          }
          return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
        } else {
          if (!isNaN(+rowA.cells[column].innerHTML)) {
            return +rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML ? 1 : -1;
          }
          return rowA.cells[column].innerHTML < rowB.cells[column].innerHTML ? 1 : -1;
        }

      });
    this.el.tBodies[0].append(...tableRows);
  };
}
