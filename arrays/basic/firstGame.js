// https://www.npmjs.com/package/readline-sync

var readlineSync = require('readline-sync');

// ask user for their player name
var userName = readlineSync.question('Enter player name: ');
console.log(`Welcome ${userName}!!`);

// make board for player
let board = [];
const rowCount = 5;
const columnCount = 5;
// add rows
for (let i=0; i < rowCount; i++){
  board.push([]);
  // add a column
 for (let j = 0; j < columnCount; j++) {
    board[i].push(' ');
  }
}

// print out board row by row
for(let i = 0; i < rowCount; i++){
  console.log(board[i]);
}

// ask user to guess a certain number of times
const maxGuesses = 3;
let userGuessesRemaining = maxGuesses;

// place ship randomly
const shipRow = Math.floor(Math.random() * rowCount) + 0;
const shipColumn = Math.floor(Math.random() * columnCount) + 0;

//loop until game is over
while (userGuessesRemaining > 0) {
  console.log(`Guesses remaining: ${userGuessesRemaining}`);

  // ask the user for their next move
  var nextMove = readlineSync.question(
    'Enter "row" "column" ("FILA" (ESPACIO) "COLUMNA"): '
    ).split(" ");
  
  // extract guesses to index arrays  
  let rowGuess = +nextMove[0];
  let columnGuess = +nextMove[1];

  // check if user hit ship
  const hitShip = rowGuess === shipRow && columnGuess === shipColumn;
  if (hitShip) {
    console.log('YOU HIT THE SHIP!');
    
    // mark the users guess on the board
    board[rowGuess][columnGuess] = 'S'; 
  }

  // tell user they missed
  else {
    console.log('You missed.')
    
    // mark the users guess on the board
    board[rowGuess][columnGuess] = 'X';
  }
    

  // print out board row by row
  for(let i = 0; i < rowCount; i++){
    console.log(board[i]);
  }

  // finish game if user hit ship
  if (hitShip) {
    break;
  }

  // turn is over, decrement guess
  userGuessesRemaining--;
}

// check if there are guesses remaining
if (userGuessesRemaining > 0){
  console.log('YOU WON!! GRATS');
}
else {
  console.log("YOU LOSE HAHAHA!")
  // mark ship
  board[shipRow][shipColumn] = 'S'

  console.log('Ship was in position:')
  for(let i = 0; i < rowCount; i++){
    console.log(board[i]);
  }
}