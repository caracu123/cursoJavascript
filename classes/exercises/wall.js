// define wall class
class Wall {
  constructor (height, strongType, weakType) {
    this.height = height;
    this.currentHeight = height;
    this.strongType = strongType;
    this.weakType = weakType;
  }
  takeDamage (damage) {
    if (damage === this.weakType && this.currentHeight > 1) {
      this.currentHeight -= 2;
      console.log(`Dragon hit you with ${damage}, it's super effective! Wall: -2`);
    }
    else if (damage === this.strongType) {
      this.currentHeight = this.currentHeight;
      console.log(`Dragon hit you with ${damage}, damage resisted!`);
    }
    else {
      this.currentHeight -= 1;
      console.log(`Dragon hit you with ${damage} element. Wall: -1`);
    }
  };
  printWall () {
    for (i = 0; i < this.currentHeight; i++) {
      console.log(' '.repeat(10) + '#'.repeat(20));
    }
    console.log('-'.repeat(40) + '\n\n');
  }
}

// export code from this file
module.exports = Wall;