function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  return result; // boolean
}

function advancedFilter(arr) {
  let result = arr.filter(i => i > 0).filter(i => i % 3 === 0).map(i => i * 10)
  return result;
}
