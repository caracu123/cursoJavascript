/*
create a dragon class that has a name property, a dmg property and a
type property. Write a method that allows the drag. to attack a wall.
This should make the dragon scream and inflict dmg to the wall
*/

const Dragons = require(`./Dragon.js`);
const Wall = require('./Wall.js');

// ask user how to setup wall (height, strong, weak)

var readlineSync = require('readline-sync');
const Dragon = require('./Dragon.js');
 
// Wait for user's response.
var height = +readlineSync.question('How tall will your wall be?: ');
var strongAgainst = readlineSync.question('Select a strong type: ');
var weakAgainst = readlineSync.question('Select a weak type: ');

// create wall
const wall1 = new Wall (height, strongAgainst, weakAgainst);
wall1.show();

/*
ask the user if they want to ad a dragon to the attack. ask for input
to describe the dragon. if the dragon is not of type fire, ice or 
electric, it will be regular. Otherwise create a dragon subclass 
accordingly and add it to a dragon collection the user created.
allow the user to stop adding dragons after each dragon creation.
*/

let dragons = [];
let addDragon = 'y';
while (addDragon === 'y') {
  addDragon = readlineSync.question('Would you like to add a dragon?(y/n): ');
  if (addDragon === 'n') break;
  var name = readlineSync.question('Insert dragon name: ');
  var damage = readlineSync.question('Insert dragon damage: ');
  var type = readlineSync.question('Insert dragon type (empty for regular dragon): ');
  
  if (type === 'fire') {
    let dragon = new Dragon 
  }
}
