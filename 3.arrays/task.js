function areArraysSame(array1, array2) {
    if (array1.length !== array2.length) {
        return;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        } else {
            return true;
        }
    }
} 
alert(areArraysSame([1, 2, 3], [1, 2, 2]));
