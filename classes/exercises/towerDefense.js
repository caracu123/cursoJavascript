/*
Create a wall class that takes in height, a strong type and a weak type 
as arguments.Based on this, the instance should create data to store the 
values passed in as arguments.Also the wall should maintain current height 
property, an ability to take damage, and print out the wall based on it's 
current height.
*/

// terminal input
var readlineSync = require('readline-sync');

// define wall class
class Wall {
  constructor (height, strongType, weakType) {
    this.height = height;
    this.currentHeight = height;
    this.strongType = strongType;
    this.weakType = weakType;
  }
  takeDamage (damage) {
    if (damage === this.weakType && this.currentHeight > 1) {
      this.currentHeight -= 2;
      console.log(`Dragon hit you with ${damage}, it's super effective! Wall: -2`);
    }
    else if (damage === this.strongType) {
      this.currentHeight = this.currentHeight;
      console.log(`Dragon hit you with ${damage}, damage resisted!`);
    }
    else {
      this.currentHeight -= 1;
      console.log(`Dragon hit you with ${damage} element. Wall: -1`);
    }
  };
  printWall () {
    let wall = '---------------\n'.repeat(this.currentHeight);
    console.log(wall);
  }
}

// create wall input
let userHeight = readlineSync.question('Insert wall height: ');

let strType = readlineSync.question(
  'Insert wall strong type \nf = fire \nw = water \ne = electric \n: '
);

let wkType = readlineSync.question(
  'Insert wall weak type \nf = fire \nw = water \ne = electric \n: '
);
// create wall
if (strType === "f") strType = "fire";
else if (strType === "e") strType = "electric";
else if (strType === "w") strType = "water";

if (wkType === "f") wkType = "fire";
else if (wkType === "w") wkType = "water";
else if (wkType === "e") wkType = "electric";

const wall1 = new Wall (userHeight, strType, wkType);
console.log();
console.log();
console.log("Congratulations, this is your wall:");
console.log(wall1);
wall1.printWall();

// attack wall
while (wall1.currentHeight > 0) {
  let continueGame = readlineSync.question(
    'Ready for the next attack? (y/n): '
  );
  if (continueGame === "n") break;
  let attack = Math.floor(Math.random()*3)+1;
  if (attack === 1) wall1.takeDamage('fire');
  else if (attack === 2) wall1.takeDamage('water');
  else if (attack === 3) wall1.takeDamage('electric');
  console.log(wall1);
  console.log("Wall:")
  wall1.printWall();
  console.log();
  console.log();
};
console.log("Game Over, well played.")