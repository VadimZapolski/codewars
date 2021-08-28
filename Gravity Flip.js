const flip=(d, arr)=>{
  if (d == 'L') {
    return arr.sort((a, b) => b - a)
  } else{
    return arr.sort((a, b) => a - b)
  }
}
