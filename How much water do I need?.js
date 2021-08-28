function howMuchWater(water, load, clothes){
  let stirka = water * 1.1 ** (clothes - load)
  if (clothes > 2*load) {
    return 'Too much clothes'
  } else if  (clothes < load) {
    return 'Not enough clothes'
  }else {
    return Number(stirka.toFixed(2))
  }
   
}
