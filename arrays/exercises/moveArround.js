var readlineSync = require('readline-sync');

// ask user for their player name
var userName = readlineSync.question('Enter player name: ');

// make world for user
const worldWidth = 3
const world = ' '.repeat(worldWidth).split('');
console.log('Empty world');
console.log(world);

// place user
const position = Math.floor(worldWidth / 2);
world[position] = 'P';
console.log('Player joined');
console.log(world);

