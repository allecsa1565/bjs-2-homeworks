function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]); 
  }


 function getUsersNamesInAgeRange(users, genders) { 
    const ages = users.filter( user => user.gender === genders).map(user => user.age);
    return ages.reduce((a, b) =>(a + b), 0) / ages.length;
 }