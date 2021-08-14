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

// create a dragon
const dragon = new Dragon(`vicious`, 5, `fire`);
console.log(dragon);
dragon.attackWall(wall);
wall.show();