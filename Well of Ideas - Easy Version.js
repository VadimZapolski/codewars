function well(x){
    let y = x.filter(newX => newX ==='good')
    console.log(y)
    if( y.length < 1 ){
       return  'Fail!'}
    if( y.length < 3 ){
      return  'Publish!'}
    if( y.length > 2 ) {
      return  'I smell a series!'}
}
