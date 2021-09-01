function typeOfSum(a, b) {
  if(typeof (a+b) === 'number') {
    return 'number'
  }else {
    return 'string'
  }
}
