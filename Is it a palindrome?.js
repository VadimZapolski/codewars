function isPalindrome(x) {
  let y = x.toLowerCase()
  let t = x.split('').reverse().join('').toLowerCase()
  console.log(y,t)
  if(y === t) {
    return true
  }else {
    return false
  }
}
