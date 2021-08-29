function whoIsPaying(name){
  if(name.length > 2) {
    return [name , name.substr(0, 2)]
  } else {
    return [name]
  }
}
