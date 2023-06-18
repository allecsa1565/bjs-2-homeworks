// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
// ############ TASK 1 ####################
    min = arr[0];
    max = arr[0];
    sum = 0;
    let arrLength = arr.length;
    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] < min) { //ищем минимум
        min = arr[i];
      }
      if (arr[i] > max) {//ищем максимум
        max = arr[i];
      }
      sum = sum + arr[i]; //вычисляем сумму элементов массмва arr[]
    }

    avg = Number((sum / arrLength).toFixed(2)); //вычисляем среднее значение, обрезаем до 2-го знака после запятой, преобразуем в число

  return { min:min, max:max, avg:avg };
}

// ############# Задание 2 #################
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

// ############### Задание 3 ###############
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
