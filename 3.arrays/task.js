function areArraysSame(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
console.log(areArraysSame([1, 2, 3, 4], [1, 2, 2, 4]));
console.log(areArraysSame([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(areArraysSame([1, 2, 3, 4], [1, 2, "3", 4]));
