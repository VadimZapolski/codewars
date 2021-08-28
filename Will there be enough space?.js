function enough(cap, on, wait) {
  let people = on + wait
  if (cap >= people  ) {
    return 0
  }else {
    return people - cap
  }
}
