function validateUsr(username) {
  if(username == username.toLowerCase() && 3 < username.length && username.length == username.split(' ').join('').length ) {
    return true
  } else {
    return false
  }
}
