function points(games) {
  let teamScore = 0;
for (i=0; i<games.length; i++) {
  let home = parseInt(games[i].charAt(0));
  let away = parseInt(games[i].charAt(2));
  if (home > away)
    {  teamScore += 3;} 
  else if (home == away)
    { teamScore += 1;} 

  }
return teamScore;
}
