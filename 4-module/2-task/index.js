/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  // console.log(table)
  let i = 0;
  for (row of table.rows) {
    row.cells[i].style.background = 'red';
    i++;
  }
}

