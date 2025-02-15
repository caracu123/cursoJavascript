// terminal input
var readlineSync = require('readline-sync');

class TicTacToe {
  constructor(empty) {
    if (empty === '') {
      empty = ' ';
    }

    this.empty = empty;

    this.board = [
      [empty, empty, empty],
      [empty, empty, empty],
      [empty, empty, empty],
    ];
  }
  // getter for empty spaces on board
  get emptySpaces() {
    let spaces = 0;
    // iterate over each row
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      // iterate over each column in the row
      for (let j = 0; j < row.length; j++) {
        const columnVal = row[j];

        // count empty spaces
        if (columnVal === this.empty) spaces++;
      }
    }
    return spaces;
  }

  // print out board so it isn't flat
  printBoard() {
    console.log('\nBoard:')
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i]);
    }
    console.log();
  }

  // randomly select empty space on board
  randomlySelectOpenBoardSpace() {
    let emptySpaces = [];
    // scan board to collect all empty spaces
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === this.empty) {
          // store empty spaces
          emptySpaces.push({row: i, column: j});
        }
      }
    }
    return emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
  }

  // allow player to mark the board at a specific position
  takeTurn(mark, row, column) {
    if (this.board[row][column] === this.empty) {
      this.board[row][column] = mark;
    }
  }

  // check if someone won
  whoIsWinner() {
    let winner = null;

    // /////////////////////
    // rows
    // /////////////////////
    // check for winners in rows
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      // check if 3 values are present in this row
      winner = are3SameValuesPresent(row);
      if (winner !== null) return winner;
    }


    // /////////////////////
    // diagonals
    // /////////////////////
    // check if there is a winner along the diagonals
    // south east
    const southEastDiagonal = [
      this.board[0][0], this.board[1][1], this.board[2][2]
    ];
    winner = are3SameValuesPresent(southEastDiagonal);
    if (winner !== null) return winner;

    // north east
    const northEastDiagonal = [
      this.board[2][0], this.board[1][1], this.board[0][2]
    ]
    winner = are3SameValuesPresent(northEastDiagonal);
    if (winner !== null) return winner;

    // /////////////////////
    // columns
    // /////////////////////
    // check the columns
    for (let i = 0; i < 3; i++) {
      const column = [];
      for (let j = 0; j < 3; j++) {
        column.push(this.board[j][i]);
      }
      // check if winner from this column
      winner = are3SameValuesPresent(column);
      if (winner !== null) return winner;      
    }

    // if we get to here nobody won
    return winner;
  }
}

// determine whether 3 x's or 3 o's are present in a 3 element array
const are3SameValuesPresent = arr => {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'X') xCount++;
    else if (arr[i] === 'O') oCount++;
  }

  // check if anybody has won
  if (xCount === 3) return 'X';
  else if (oCount === 3) return 'O';

  return null;
}

// ask user for empty space character
let emptyChar = readlineSync.question(
  'Insert empty space character: '
);

// create new board using class
const game = new TicTacToe(emptyChar);
game.printBoard();

// keep track of when to take user's turn
let isUserTurn = true;

// loop while there is no winner and there is space on the board
let winner = null;
while (winner === null && game.emptySpaces > 0) {
  let rowMove = -1;
  let colMove = -1;
  // check for user turn
  if (isUserTurn){
    // have user take a turn
    let userMove = readlineSync
      .question('\nWhere would you like to go: ')
      .split(' ')
    rowMove = +userMove[0];
    colMove = +userMove[1];
    // game.takeTurn('X', rowMove, colMove);
  }

  else {
    // make computer take a turn
    console.log('Computer Moving...');
    let computerMove = game.randomlySelectOpenBoardSpace();
    rowMove = computerMove.row;
    colMove = computerMove.column;
    // game.takeTurn('O', computerMove.row, computerMove.column);
  }
  // take turn, print board, update user turn boolean and check for winner
  game.takeTurn(isUserTurn ? 'X' : 'O', rowMove, colMove);
  game.printBoard();
  isUserTurn = !isUserTurn;
  winner = game.whoIsWinner();
}


// if somebody won, congratulate
if (winner !== null) console.log(`${winner} won!!! Hope you had fun.`);
else console.log(`You both suck, nobody won.`);



// test board
// for (let i = 0; i < 3; i++) {
//   game.takeTurn("O", 2, i);
//   game.printBoard();
//   console.log(`Winner: ${game.whoIsWinner()}`);
// }

// test southEastDiagonal
// for (let i = 0; i < 3; i++) {
//   game.takeTurn("O", i, i);
//   game.printBoard();
//   console.log(`Winner: ${game.whoIsWinner()}`);
// }

// test northEastDiagonal
// for (let i = 0; i < 3; i++) {
//   game.takeTurn("O", 2-i, i);
//   game.printBoard();
//   console.log(`Winner: ${game.whoIsWinner()}`);
// }

// test columns
// for (let i = 0; i < 3; i++) {
//   game.takeTurn("X", i, 0);
//   game.printBoard();
//   console.log(`Winner: ${game.whoIsWinner()}`);
// }

// fill up an empty spot randomly for each remaining spot
// while (game.emptySpaces > 0) {
//   const randomMove = game.randomlySelectOpenBoardSpace();
//   game.takeTurn('O', randomMove.row, randomMove.column);
//   game.printBoard();
// }

