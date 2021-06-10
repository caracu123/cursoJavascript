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
  }

  // allow player to mark the board at a specific position
  takeTurn(mark, row, column) {
    if (this.board[row][column] === this.empty) {
      this.board[row][column] = mark;
    }
  }

  whoIsWinner() {
    // check for winners in rows
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];

      let xCount = 0;
      let oCount = 0;
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 'X') xCount++;
        else if (row[j] === 'O') oCount++;
      }

      // check if anybody has won
      if (xCount === 3) return 'X';
      else if (oCount === 3) return 'O';
    }

    // check if there is a winner along the diagonals
    const southEastDiagonal = [
      this.board[0][0], this.board[1][1], this.board[2][2]
    ];

    // if we get to here nobody won
    return 'Nobody';
  }
}

// ask user for empty space character
let emptyChar = readlineSync.question(
  'Insert empty space character: '
);

// create new board using class
const newGame = new TicTacToe(emptyChar);
newGame.printBoard();
console.log(`Spaces remaining: ${newGame.emptySpaces}`);

// test board
newGame.takeTurn('X', 1, 1);
newGame.printBoard();

newGame.takeTurn('O', 1, 1);
newGame.printBoard();