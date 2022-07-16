//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.


const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

function searchSubString(puzzle, word) {
  // конструктор ругулярок.
  const regex = new RegExp(`${word}|${word.split('').reverse().join('')}`);
  let result = false;
  for (const row of puzzle) {
    // копирование массива.(синтакс ES6).
    const currentRow = [...row];
    if (currentRow.join('').match(regex)) {
      return true;
    }
  }

  for (let i = 0; i < puzzle.length; i++) {
    let currentColumn;
    currentColumn = []
    for (let j = 0, k = 0; j < puzzle[0].length; j++, k++) {
      currentColumn[k] = puzzle[j][i];
    }
    if (currentColumn.join('').match(regex)) {
      return true;
    }
  }

  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[0].length; j++) {
      let currentDiag;
      currentDiag = [];
      let m = i, n = j, k = 0;
      while (m < puzzle.length && n < puzzle[0].length) {
        currentDiag[k] = puzzle[m][n];
        k++;
        m++;
        n++;
      }
      if (currentDiag.join('').match(regex)) {
        return true;
      }
    }
  }

  return result;
}

// Level 1
searchSubString(examplePuzzle, "like"); // true
searchSubString(examplePuzzle, "gold"); // true
searchSubString(examplePuzzle, "queen"); // true
// Level 2
console.log(searchSubString(examplePuzzle, "mru")); // true
