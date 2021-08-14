// define wall class
class Wall {
  constructor (height, strongAgainst, weakAgainst) {
    this.height = height;
    this.currentHeight = height;
    this.strongAgainst = strongAgainst;
    this.weakAgainst = weakAgainst;
  }

  show () {
    console.log(`Height: ${this.currentHeight}/${this.height} | Strong: ${this.strongAgainst} | Weak: ${this.weakAgainst}`);
    for (let i = 0; i < this.currentHeight; i++) {
      console.log(' '.repeat(10) + '#'.repeat(20));
    }
    console.log('-'.repeat(40) + '\n\n');
  }

  takeDamage (damage) {
    this.currentHeight -= damage;
  }
}

// export code from this file
module.exports = Wall;