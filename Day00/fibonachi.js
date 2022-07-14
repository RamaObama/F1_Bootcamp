// Напишите функицю, которая принимает индекс числа из ряда Фибоначчи и возвращает его значение
// Предположим, что ряд Фибоначчи начинается с 0 индекса

//
// function fibo(index) {
//   let num = 1;
//   let result = 1;
//   for (let i = 3; i <= index + 1; i++) {
//     let temp = num + result;
//     num = result;
//     result = temp;
//   }
//   return result;
// }

function fibo(index) {
  return index + 1 <= 1 ? index + 1: fibo(index - 1) + fibo(index - 2);
}

fibo(5); // Вернет 8
