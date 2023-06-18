function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] < min)
        min = arr[i]; 
     
     if(arr[i] > max)
        max = arr[i];
      
      sum += arr[i];
    
    }
    avg = +(sum / arr.length).toFixed(2)
    
    
  return { min: min, max: max, avg: avg };
}
