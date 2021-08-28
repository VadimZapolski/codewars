function evenNumbers(array, number) {
  let arr = array.filter(x => x%2===0)
  console.log(arr.length)
  if(arr.length > number) {
   arr.splice(0, arr.length - number )
  return arr
  }else {
    return arr
  }
}
