/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // Сюда будем складывать озаглавленные части слова
  const withCapitalLetterWords = [];
  // Берем строку и делим на массив слов,
  str.split('-')
    // затем каждое слово начиная со второго,
    // прогоняем через функцию увеличения первой буквы
    // и закидываем в массив с озаглавленными частями слова
    .map( (word, index) => {
      withCapitalLetterWords.push(index > 0 ? ucFirst(word) : word);
    });
  // потом склеиваем массив в строку и возвращаем
  return withCapitalLetterWords.join('');
}

function ucFirst(str) {
  // Проверяем что не false, nan, undefined, '', через двойную логическую инверсию
  if (!!str) {
    // Первый символ приводим к верхнему регистру и конкатенируем с подстрокой из str, начиная с 1
    return str[0].toUpperCase() + str.slice(1);
  }
  return '';
}


// console.log(camelize('background-color')); //== 'backgroundColor';
// console.log(camelize('list-style-image')); // == 'listStyleImage';
// console.log(camelize('-webkit-transition')); // == 'WebkitTransition';
