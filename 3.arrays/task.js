function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length) {
    result = arr1.every((item, index) => item === arr2[index]);
  } else {
    result = false;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10)
}
