function DNAtoRNA(dna) {
  let up = dna.toUpperCase()
  return up.split('T').join('U')
  }
