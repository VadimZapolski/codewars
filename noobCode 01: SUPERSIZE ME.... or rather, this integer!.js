function superSize(num){
  return Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )
}
