function combat(health, damage) {
  if(health >= damage) {
    return health - damage
  } else {
    return 0
  }
}
