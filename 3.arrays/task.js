function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length)
    return arr1.every((element, index) => element === arr2[index]);
  else return false;
}
// let result = JSON.stringify(arr1)==JSON.stringify(arr2); //ещё один рабочий вариант
// return result;

function advancedFilter(arr) {
  let result = arr.filter(i => i > 0).filter(i => i % 3 === 0).map(i => i * 10)
  return result;
}
