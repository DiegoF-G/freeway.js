let actorScore = 0

function showScore () {
  textAlign (CENTER);
  textSize (25);
  fill (color (255,140,0) ) 
  text (actorScore, width / 3, 27);
}

function scoreActor () {
  if (yActor < -15) {
    actorScore += 1;
    yActor = 366;
    scoreSound.play ();
  }
}


