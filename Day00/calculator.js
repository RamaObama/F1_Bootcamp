// Вам надо набор функций который будет симулировать калькулятор.
// Для этого вам надо написать 9 функций, которые могут! принимать в кач - ве аргумента другую функцию, если функция передана, то надо вернуть вызов функции с числом n, иначе вернуть число n.
// Например, функция one может принять в кач - ве аргумента функцию sum, тогда в return будет sum(1).Если же в функцию не передали ничего, то она просто вернет 1.
// Также надо написать 4 функции основных арифмитических операторов, которые принимают в кач-ве аргумента первое число, а возвращают функцию, которая принмает в кач-ве аргумента второе число и возвращает их сумму/разность/частое/произведение

function one(callback) {
  if (typeof (callback) === 'function') {
    return callback(1);
  } else {
    return 1;
  }
}

function two(callback) {
  if (typeof (callback) === 'function') {
    return callback(2);
  } else {
    return 2;
  }
}

function three(callback) {
  if (typeof (callback) === 'function') {
    return callback(3);
  } else {
    return 3;
  }
}

function four(callback) {
  if (typeof (callback) === 'function') {
    return callback(4);
  } else {
    return 4;
  }
}

function five(callback) {
  if (typeof (callback) === 'function') {
    return callback(5);
  } else {
    return 5;
  }
}

function six(callback) {
  if (typeof (callback) === 'function') {
    return callback(6);
  } else {
    return 6;
  }
}

function seven(callback) {
  if (typeof (callback) === 'function') {
    return callback(7);
  } else {
    return 7;
  }
}

function eight(callback) {
  if (typeof (callback) === 'function') {
    return callback(8);
  } else {
    return 8;
  }
}

function nine(callback) {
  if (typeof (callback) === 'function') {
    return callback(9);
  } else {
    return 9;
  }
}

function plus(a) {
  return function(b) {
    return a + b;
  }
}

function minus(a) {
  return function(b) {
    return a - b;
  }
}

function divide(a) {
  return function(b) {
    return a / b;
  }
}

function mult(a) {
  return function(b) {
    return a * b;
  }
}

one(mult(three(plus(four())))); // В итоге вернется 7
