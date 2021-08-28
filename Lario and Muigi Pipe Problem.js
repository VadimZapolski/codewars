function pipeFix(numbers){
    let newNumbers = numbers.sort(function(a,b){ 
  return a - b
})
    let arr = []
    let first = newNumbers[0]
    let last = newNumbers[newNumbers.length -1]
    for (let i = first ; i <= last  ; i++) {
      arr.push(i)
    }
  return arr
}
