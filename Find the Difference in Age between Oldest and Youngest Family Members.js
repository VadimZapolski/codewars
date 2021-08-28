function differenceInAges(ages){
   ages.sort((a,b)=> a > b ? 1 : -1)
  let minAge = ages[0]
  let maxAge = ages[ages.length - 1]
  let raznost = maxAge - minAge
  let x = []
  x.push(minAge,maxAge,raznost)
  return x

}
