function findMultiples(integer, limit) {
  let arr = []
  for(x = integer ; x <= limit ; x = x + integer){
     arr.push(x)
  }
  return arr
}
