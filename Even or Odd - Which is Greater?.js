function evenOrOdd(str) {
  let x = str.split('').map(Number)
  let chet = x.filter(w => w%2==0)
  let nechet = x.filter(w => w%2==1)
  let summaChet = (chet.reduce( (a,b) => a+b ))
  let summaNechet = (nechet.reduce( (a,b) => a+b ))
  if (summaChet > summaNechet) return 'Even is greater than Odd'
  if (summaChet < summaNechet) return 'Odd is greater than Even'
  if (summaChet == summaNechet) return 'Even and Odd are the same'
}
