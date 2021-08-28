function areYouPlayingBanjo(name) {
  if(name.toLowerCase().indexOf('r') == 0 ){
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
  return name;
}
