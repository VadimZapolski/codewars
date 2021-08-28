function findDifference(a, b) {
  let sumA = a[0] * a[1] * a[2]
  let sumB = b[0] * b[1] * b[2]
  if (sumA>=sumB) {
    return sumA-sumB
  }
  if (sumB>sumA) {
    return sumB-sumA
  }
}
