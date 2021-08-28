function bmi(weight, height) {
  let ves = weight / height**2;
  if (ves <= 18.5 ){
    return "Underweight"
  }
  if (ves <= 25 ){
    return "Normal"
  }
  if (ves <= 30 ){
    return "Overweight"
  }
  if (ves > 30 ){
    return "Obese"
  }
}
