function strCount(str, letter){  
  
  let x = str.split('').filter(r => r == letter)
  return x.length
}
