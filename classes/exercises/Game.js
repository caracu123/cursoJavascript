/*
create a dragon class that has a name property, a dmg property and a
type property. Write a method that allows the drag. to attack a wall.
This should make the dragon scream and inflict dmg to the wall
*/

const Wall = require('./Wall.js');
const { FireDragon, IceDragon, ElectricDragon, RegularDragon } = require('./Dragon.js');
var readlineSync = require('readline-sync');



// ask user how to setup wall (height, strong, weak)
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

// ask for dragons until user wants to stop
let dragons = [];
let addDragon = 'y';
while (addDragon === 'y') {
  addDragon = readlineSync.question('\nWould you like to add a dragon?(y/n): ');
  if (addDragon !== 'y') break;
  var name = readlineSync.question('Insert dragon name: ');
  var damage = readlineSync.question('Insert dragon damage: ');
  var type = readlineSync.question('Insert dragon type \nf = fire \ni = ice \ne = electric \nanything = regular: ');
  
// crete dragons
let dragon = null;
  if (type === 'f') dragon = new FireDragon (name, damage);
  else if (type === 'i') dragon = new IceDragon (name, damage);
  else if (type === 'e') dragon = new ElectricDragon (name, damage);
  else dragon = new RegularDragon (name, damage);
  dragons.push(dragon);

  console.log(`Added dragons: ${dragons.length}`);
}
console.log(dragons);

/*
ask the user how many times the dragons will attack. then make each
dragon attack after the other for as many times as the user specified.
also the attack should stop if the walls fall. write a getter in the
wall class to determine if it has fallen. in the end have some output
determine who wins.
*/
