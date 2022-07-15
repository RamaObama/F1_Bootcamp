// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'


function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];
  const limit = 20;
  const result = {};

  let amount = sum;
  let count = 0;
  // console.log('amount:', amount);

  banknots.forEach((item) => {
    if (Math.floor(amount / item) > 0) {
      result[item] = Math.floor(amount / item);
      count += Math.floor(amount / item);
      amount -= result[item] * item;
    }
  });
  if (count > limit) {
    return 'Limit exceeded';
  } else if (amount === 0) {
    return result;
  } else {
    return 'Incorrect value';
  }
}

atm(8350); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
atm(2570); // Incorrect value
atm(100050); // limit exceeded
