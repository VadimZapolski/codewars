function betterThanAverage(classPoints, yourPoints) {
  let x = classPoints.reduce((a, b) => a + b) / classPoints.length
  if (x < yourPoints) {
    return true 
  }else {
    return false
  }
}
