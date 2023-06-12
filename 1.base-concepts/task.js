"use strict";
function solveEquation(a,b,c) {
  let arr=[];
  let d = (b**2-4*a*c);
  if (d>0){
   let root1 = (-b + Math.sqrt(d) )/(2*a);
   let root2 =  (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1,root2);
    console.log(arr);
    return arr;
  }
if (d === 0){
  let root0= -b/(2*a);
  arr.push(root0);
    console.log(arr);
  return arr;
}
else {
  console.log("корней нет"+ arr)
}
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
      const perMonth = percent / 100 / 12;
      const bodyCredit = amount - contribution;
      const monthly = bodyCredit * (perMonth + (perMonth / (((1 + perMonth) ** countMonths) - 1)));
      const totalSum = parseFloat((monthly * countMonths).toFixed(2));
      return totalSum;
  }
  return false;

}
