function isOpposite(s1,s2){
  let x = ''
  if(s1.length == 0 || s2.length == 0)  return false
  for(i=0 ; i < s1.length ; i++){
    s1[i] === s1[i].toLowerCase() ? x += s1[i].toUpperCase() : x += s1[i].toLowerCase()
  }
  return x === s2
}
