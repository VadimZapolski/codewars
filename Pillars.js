function pillars(num_pill, dist, width) {
  if(num_pill < 2) {
    return 0
  } else if (num_pill == 2) {
    return dist * 100
  } else {
    return dist * (num_pill-1) * 100 + (width*(num_pill-2))
  }
}
