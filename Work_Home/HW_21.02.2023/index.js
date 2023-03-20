// Задача 1: Найти сумму трех чисел
function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

// Пример использования
const sum = sumThreeNumbers(1, 2, 3);
console.log(sum); // 6


// Задача 2: По двум заданным числам проверять является ли одно квадратом другого
function isOneSquareOfAnother(x, y) {
  if (Math.sqrt(x) === y || Math.sqrt(y) === x) {
    return true;
  }
  return false;
}

// Пример использования
const check = isOneSquareOfAnother(4, 2);
console.log(check); // true


// Задача 3: На промежутке от 1 до N, показать кубы чисел, заканчивающихся на четную цифру
function showEvenDigitCubes(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 10 % 2 === 0) {
      console.log(i ** 3);
    }
  }
}

// Пример использования
showEvenDigitCubes(20);
// выводит на экран:
// 8
// 64
// 216
// 512
// 1000
// 1728
// 2744
// 4096
// 5832
// 8000
