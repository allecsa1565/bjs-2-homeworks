// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0; 
  let avg;

  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let num = arr[i];

    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }

    sum = sum + num;
  }

  avg = Number((sum / arrLength).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  let arrLength = arr.length;

  for(let i = 0; i < arrLength; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  let arrOfArrLength = arrOfArr.length;

  for (let i = 0; i < arrOfArrLength; i++) {
    let res = func(arrOfArr[i]);

    if (res > max) {
      max = res;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let num = arr[i];

    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }

  return Math.abs(max - min);
}
