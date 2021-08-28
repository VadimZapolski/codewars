function arrayMadness(a, b) {
  let x = a.map(a => a*a)
  let y = b.map(b => b**3)
  let sumX = x.reduce(function(a,b){return(a+b)})
  let sumY = y.reduce(function(a,b){return(a+b)})
  console.log(sumX,sumY)
  if (sumX > sumY) {
    return true
  }else {
    return false
  }
}
