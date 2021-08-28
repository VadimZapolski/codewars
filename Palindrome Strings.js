function isPalindrome(line) {
  let x = String(line)
  let newLine = x.split('').reverse().join('')
  console.log(line , newLine)
  if( line == newLine ) {
     return true
     } else {
       return false
     }
}
