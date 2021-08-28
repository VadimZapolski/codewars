function powersOfTwo(n) {
  let start = 0;
  let myArr = [];
  for (var i = start; i <=n; i++) {
    myArr.push(i);
  }
  
  let mapped = myArr.map(function(num) {
    return Math.pow(2,num); // 2 goes first
  });
  return mapped;
}
