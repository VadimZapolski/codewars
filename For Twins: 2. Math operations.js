function iceBrickVolume(radius, bottleLength, rimLength) {
  let h = bottleLength - rimLength
  let V = 2 * radius** 2 * h
  return V
}
