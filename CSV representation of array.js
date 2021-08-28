function toCsvText(array) {
  var string = "";
  for(var i = 0; i < array.length; i++){
    string += array[i] + '\n';
  }
  return string.slice(0,-1);
}
