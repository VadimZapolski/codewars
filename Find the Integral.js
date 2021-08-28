function integrate(coefficient, exponent) {
  let x = exponent + 1
  let y = coefficient / x
  return `${y}x^${x}`
}
