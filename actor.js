//Actor (Cow) variables

let xActor = 100
let yActor = 366
const actorWidth = 30
const actorHeight = 30 

//Actor functions

function showActor () {
  image (actorImage, xActor, yActor, actorWidth, actorHeight)
}

function actorMotion () {
 if (keyIsDown (UP_ARROW)) {
    yActor -= 3;
 }

 if (keyIsDown (DOWN_ARROW)) {
    yActor += 3;
   if (yActor > 366) {
     yActor = 366
   } 
 }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter). Library function of file "p5.collide.p5.js" 

let collision = false

function collideActorCar () {
 for (let i = 0; i < carsImage.length; i++) {
   collision = collideRectCircle (xCars[i], yCars[i], carWidth, carHeight, xActor, yActor, 15);
   if (collision) {
     yActor = 366;
     if (actorScore > 0) {
      actorScore -= 1 
     }
   colisionSound.play ();  
   }
 }
}  

