function warnTheSheep(queue) {
  let x = queue.reverse().indexOf('wolf')
  if(x > 0) {
    return   `Oi! Sheep number ${x}! You are about to be eaten by a wolf!`
  } else {
    return 'Pls go away and stop eating my sheep'
  }
}
