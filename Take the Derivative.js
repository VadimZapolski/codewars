function derive(coefficient,exponent) {
  let x = coefficient * exponent
  let y = exponent - 1
  return `${x}x^${y}`
}
