function setup () {
  createCanvas (500, 400);
  soundtrack.loop ();
}

function draw () {
  background (roadImage);
  showActor ();
  showCar ();
  carMotion ();
  actorMotion ();
  returnCar ();
  collideActorCar ();
  showScore ();
  scoreActor ();
}

