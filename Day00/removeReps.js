// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
  let seen = [];  // {}
  let result = [];
  let length = array.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    let item = array[i];
    //console.log(seen[i])
    if (!seen[item]) {
      seen[item] = 1;
      result[j++] = item;
    }
  }
  return result;
}


removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]); // [1,2,4,5,6,8,9,11]
