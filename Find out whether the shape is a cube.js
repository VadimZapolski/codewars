var cubeChecker = function(volume, side){
  if (side**3 == volume && volume > 0 && side > 0){
    return true
  } else {
    return false 
  }
};
