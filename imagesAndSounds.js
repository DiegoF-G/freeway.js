//Images and Sounds

let roadImage
let actorImage
let car1Image
let car2Image
let car3Image

let soundtrack
let colisionSound
let scoreSound

function preload () {
  roadImage = loadImage ("images/road.png");
  actorImage = loadImage ("images/actor-1.png");
  car1Image = loadImage ("images/car-1.png");
  car2Image = loadImage ("images/car-2.png");
  car3Image = loadImage ("images/car-3.png");
  carsImage = [car1Image, car2Image, car3Image, car2Image, car1Image, car3Image];
  
  soundtrack = loadSound ("sounds/track.mp3")
  colisionSound = loadSound ("sounds/collide.mp3")
  scoreSound = loadSound ("sounds/score.wav")
}
