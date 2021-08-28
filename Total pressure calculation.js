solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  let R = 0.082
  let Temp = 273.15 + temp
  return ((((givenMass1 * 0.001/ molarMass1) + (givenMass2 * 0.001 / molarMass2)) * Temp * R) / volume) *1000
}
