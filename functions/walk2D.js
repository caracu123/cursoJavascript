// include code to get user imput
var readlineSync = require('readline-sync');

// print out world
const printOutWorld = world => {
  for (let i = 0; i < world.length; i++) {
    console.log(world[i]);
  }
}

// writes a specific character to a position in the world
const writeToWorld = (world, row, column, char) => {
  world[row][column] = char;
}

// make world for user
const worldRows = 5;
const worldColumns = 5;
// const world = ' '.repeat(worldColumns).split('');
const world = [];
for (i = 0; i < worldRows; i++) {
  world.push(' '.repeat(worldColumns).split(''));
}
console.log('Empty world');
printOutWorld(world);

// place user
let rowPosition = Math.floor(worldRows / 2);
let columnPosition = Math.floor(worldColumns / 2);
writeToWorld(world, rowPosition, columnPosition, 'P');
console.log('Player joined');
printOutWorld(world);

// loop until ser wishes to stop
while(true){
  
  // ask user for movement direction
  var nextDirection = readlineSync.question(
    '\n\nWhat direction would you like to go? '
  );
  console.log(nextDirection);

  //nullify players current position
  writeToWorld(world, rowPosition, columnPosition, ' ');

  // right
  if (nextDirection === 'right' && columnPosition < worldColumns-1) {
    columnPosition += 1;
  }
  // left
  // don't allow player to go out of bounds
  else if (nextDirection === 'left' && columnPosition > 0) {
    columnPosition -= 1;    
  }
  // up
  else if (nextDirection === 'up' && rowPosition > 0) {
    rowPosition -= 1;
  }
  // down
  else if (nextDirection === 'down' && rowPosition < worldRows-1) {
    rowPosition += 1;
  }
  // close
  else break;

  // put player back in world
  writeToWorld(world, rowPosition, columnPosition, 'P');
  printOutWorld(world);
}
console.log('Thanks for playing!!');