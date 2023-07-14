//Cars variables 

let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 96, 150, 210, 270, 318]
let vCars = [2, 2.5, 3.2, 5, 3.3, 2.3]
    
const carWidth = 50
const carHeight = 40

//Cars functions

function showCar () {
  for (let i = 0; i < carsImage.length; i++) {
    image (carsImage[i], xCars[i], yCars[i], carWidth, carHeight)
  }
} 

function carMotion () {
 for (let i = 0; i < carsImage.length; i++) {
   xCars[i] -= vCars[i];
 }
}

function ifXcarLess50 (xCar) {
  return xCar < -50
}

function returnCar () {
  for (let i = 0; i < xCars.length; i++) {
    if (ifXcarLess50 (xCars[i])) {
   xCars[i] = 600 
  }
 }
}
