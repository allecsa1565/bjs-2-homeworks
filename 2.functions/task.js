// Задание 1
function getArrayParams(...arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

// Задание 2

function summElementsWorker(...arr) {
  let summ = 0;
  if (arr.length == 0) {
    return summ = 0;
  }
  summ = arr.reduce((sum, item) => {
    return sum += item;
  });
  return summ;
}

function differenceMaxMinWorker(...arr) {
  let diff;
  if (arr.length === 0) {
    return diff = 0;
  }
  return diff = Math.max.apply(null, arr) - Math.min.apply(null, arr)

}


function differenceEvenOddWorker(...arr) {
  let sumEvenEl = 0,
      sumOddEl = 0,
      difElem = 0;
      console.log(arr.length);
  if (arr.length === 0) {
    return difElem;
  }
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenEl += arr[i];
    } else {
      sumOddEl += arr[i]
    }
  }



function averageEvenElementsWorker(...arr) {
  let sumEvenEl = 0,
      countEvenEl = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenEl += arr[i];
      countEvenEl++;
      }
    }
    return sumEvenEl / countEvenEl;
  }

  function makeWork (arrOfArr, func) {
    let maxResult = -Infinity;
    for(let i = 0 ; i < arrOfArr.length ; i++) {
      let result = func(...arrOfArr[i]);
      if(maxResult < result) {
        maxResult = result
      }
    }
    return maxResult;
  }

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}
