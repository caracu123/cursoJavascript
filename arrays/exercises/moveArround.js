// include code to get user imput
var readlineSync = require('readline-sync');

// make world for user
const worldWidth = 3
const world = ' '.repeat(worldWidth).split('');
console.log('Empty world');
console.log(world);

// place user
let position = Math.floor(worldWidth / 2);
world[position] = 'P';
console.log('Player joined');
console.log(world);

// assume user wishes to play
let userWishesToContinue = true;

// loop until ser wishes to stop
while(userWishesToContinue){
  
  // ask user for movement direction
  var nextDirection = readlineSync.question(
    '\n\nWhat direction would you like to go? '
  );
  console.log(nextDirection);

  //nullify players current position
  world[position] = ' ';

  // move the player to right
  if (nextDirection === 'right') {
    position += 1;
  }
  // move player to the left
  // don't allow player to go out of bounds
  else if (nextDirection === 'left' && position > 0) {
    position -= 1;    
  }
  // put player back in world
  world[position] = 'P';
  console.log(world);

  // ask user if continue
  var userInput = readlineSync.question(
    'Wanna continue?'
  );
  //calculate result from input
  if (userInput !== 'yes'){
    userWishesToContinue = false;
  }
}
console.log('Thanks for playing!!');