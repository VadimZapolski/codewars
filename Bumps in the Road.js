function bump(x){
   let w = x.split('_').join('')
   console.log(w)
  if(w.length <= 15) {
    return "Woohoo!"
  } else{
    return "Car Dead"
  }
}
