// Можно решить эту задачу, отсортировав оба массива и сравнив их элементы по порядку. Если все элементы совпадают, то массивы равны.

function areArraysEqual(arr1, arr2) {
    // Если длины массивов не совпадают, они не могут быть равными
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Сортируем оба массива
    arr1.sort();
    arr2.sort();
  
    // Сравниваем элементы массивов по порядку
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Пример использования
  const arr1 = [1, 2, 5, 4, 0];
  const arr2 = [2, 4, 5, 0, 1];
  const result = areArraysEqual(arr1, arr2);
  console.log(result); // true
  