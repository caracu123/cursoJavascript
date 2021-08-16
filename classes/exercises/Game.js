/*
create a dragon class that has a name property, a dmg property and a
type property. Write a method that allows the drag. to attack a wall.
This should make the dragon scream and inflict dmg to the wall
*/

const Dragons = require(`./Dragon.js`);
const Wall = require('./Wall.js');

// create a wall
const wall = new Wall (10, `ice`, `fire`);
wall.show();

// create 4 dragons
const regularDragon = new Dragons.RegularDragon(`vicious`, 1);
const fireDragon = new Dragons.FireDragon('fire boy 24', 1);
const iceDragon = new Dragons.IceDragon('icybuoy', 1);
const electricDragon = new Dragons.ElectricDragon('pikachu', 1);
const allDragons = [regularDragon, fireDragon, iceDragon, electricDragon];

// attack wall with all dragons
for (let i = 0; i < allDragons.length; i++) {
  allDragons[i].attackWall(wall);
  wall.show();
}