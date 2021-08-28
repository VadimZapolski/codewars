function converter (mpg) {
  let ImperialGallon = 4.54609188
  let oneMiles = 1.609344
  let ratio = 1.609344 / 4.54609188
  return Math.round(100 * mpg * ratio) / 100
}
