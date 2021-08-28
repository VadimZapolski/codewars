function calculateTip(amount, rating) {
  let x = rating.toLowerCase()
  if(x == 'terrible') {
    return 0
  }
  if(x === 'poor') {
    return Number(Math.ceil(amount/100*5));
  }
  else if(x === 'good') {
   return Number(Math.ceil(amount/100*10));
  }
  else if(x === 'great') {
    return Number(Math.ceil(amount/100*15));
  }
  else if(x === 'excellent') {
    return Number(Math.ceil(amount/100*20));
  }else{
return("Rating not recognised");
}
   
}
