function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]); 
  }

  function getUsersNamesInAgeRange(users, gender) {
	return gender.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);
  }
  
  // function advancedFilter (arr) {
  //   return arr.reduce((acc, value) => {
  //     if (value > 0 && value % 3 === 0) {
  //       acc.push(value * 10);
  //     }
  //     return acc;
  //   }, [])
  // }