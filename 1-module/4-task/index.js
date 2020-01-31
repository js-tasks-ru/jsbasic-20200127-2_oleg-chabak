/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const spamList = ['1xBet', 'XXX'];
  for (let i = 0 ; i < spamList.length ; i++) {
    if (str.toLowerCase().includes(spamList[i].toLowerCase())) {
      return true
    }
  }
  return false
}

console.log(checkSpam('free xxxx'));
