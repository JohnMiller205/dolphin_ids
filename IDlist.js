
//Вставляем полученные IDs строкой и выводим их столбиком в консоль

console.log(wordsInColumn('<Сюда вставьте список IDs, которые вы получили>'));
function wordsInColumn(text) {
  let words = text.split(', ');
  let maxLength = Math.max.apply(null, words.map(w => w.length));
  return words.map(w => ' '.repeat(maxLength - w.length) + w).join('\n');
}
//теперь нужно их скопировать и записать в файл browser.ids.txt

//теперь закомментируйте код выше, а тот что ниже наоборот - раскомментируйте

//Беру IDs, которые получил предидущим кодом из файла и вывожу в консоль в правильном порядке.

// const fs = require('fs');
// const readFileLines = filename => fs.readFileSync(filename).toString('UTF8').split('\n');
// let browser_full_id = readFileLines('browser.ids.txt');

// for (let i = 78; i >= 0; i--){
//   console.log(browser_full_id[i]);
// }

//Берем и копируем ручками ID из консоля и записываем куда нам надо
