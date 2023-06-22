function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]); 
}

function advancedFilter(arr) {
	let resultArr;
  
	resultArr = arr
	.filter((element) => element > 0) // оставляем токмо эдементы строго больше нуля
	.filter((element) => element % 3 === 0) // оставляем токмо кратные трём
	.map((element) => element * 10); // оставшиеся элементы умножаем на 10 и формируем из них массив
  
	return resultArr; // array
  }

// function advancedFilter(arr) {
//   return arr.reduce((acc, value) => {
//     if (value > 0 && value % 3 === 0) {
//       acc.push(value * 10)
//     }
//     return acc;
//   }, [])
// }