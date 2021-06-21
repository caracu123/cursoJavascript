/*
Create a wall class that takes in height, a strong type and a weak type 
as arguments.Based on this, the instance should create data to store the 
values passed in as arguments.Also the wall should maintain current height 
property, an ability to take damage, and print out the wall based on it's 
current height.
*/

class Wall {
  constructor (height, strongType, weakType) {
    this.height = height;
    this.currentHeight = height;
    this.strongType = strongType;
    this.weakType = weakType;
  }
  takeDamage (damage) {
    if (damage === this.weakType) this.currentHeight -= 2;
    else if (damage === this.strongType) this.currentHeight = this.currentHeight;
    else this.currentHeight -= 1;
  }
  printWall () {
    let wall = '---------------'.repeat(this.currentHeight)
    console.log(wall);
  }
}

const wall1 = new Wall (10, 'fire', 'ice');
wall1.takeDamage('fire');
console.log(wall1);
wall1.printWall();