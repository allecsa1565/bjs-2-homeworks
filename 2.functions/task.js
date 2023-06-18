'use strict'
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min:min, max:max, avg:avg };
}

function worker(arr) {
  let sum = 0;
  let arrLength = arr.length;

  for (j = 0; j < arrLength; j += 1) {
    sum = sum + arr[j]; //вычисляем сумму элементов массмва arr[]
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let arrOfArrLength = arrOfArr.length;

  for (i = 0; i < arrOfArrLength; i += 1) {
      arrResultElement = func(arrOfArr[i]);
      if (arrResultElement > max) max = arrResultElement;//ищем максимум
  }

  return max;
}

function worker2(arr) {
  let min = arr[0];
   let max = arr[0];
   let arrLength = arr.length;
    for (l = 0; l < arrLength; l += 1) {
      if (arr[l] < min) min = arr[l]; //ищем минимум
      if (arr[l] > max) max = arr[l]; //ищем максимум
    }

    let delta = max - min; //вычисляем расстояние между мин и макс элементами массива arr[]
    
    return delta;
}
