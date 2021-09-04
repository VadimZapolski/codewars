function grader(score) {
  console.log(score)
  if(score < 0.6 || score > 1) {
    return 'F'
  }
  if(0.9 <= score && score <=1) {
    return 'A'
  }
  if(0.8 <= score && score < 0.9) {
    return 'B'
  }
  if(0.7 <= score && score < 0.8) {
    return 'C'
  }
  if(0.6 <= score && score < 0.7 ) {
    return 'D'
  }
}
