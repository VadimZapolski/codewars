function ensureQuestion(s) {
  let x = s.slice(-1)
  if(x == '?'){
    return s
  }else {
    return s+'?'
  }
}
