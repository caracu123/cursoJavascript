/*
create a dragon class that has a name property, a dmg property and a
type property. Write a method that allows the drag. to attack a wall.
This should make the dragon scream and inflict dmg to the wall
*/

const Dragon = require(`./Dragon.js`);
const Wall = require('./Wall.js');

// create a wall
const wall = new Wall (10, `ice`, `fire`);
wall.show();

// create 3 dragons
const regularDragon = new Dragon.RegularDragon(`vicious`, 1);
const fireDragon = new Dragon.FireDragon('fire boy 24', 2);
const IceDragon = new Dragon.IceDragon('icybuoy', 3);
const allDragons = [regularDragon, fireDragon, IceDragon];

// attack wall with all dragons
for (let i = 0; i < allDragons.length; i++) {
  allDragons[i].attackWall(wall);
  wall.show();
}