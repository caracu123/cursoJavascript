/*
create a dragon class that has a name property, a damage property, and a type
property. Also write a method that allows the dragon to attack the wall. This
method should make the dragon do some kind of noise and then inflict dmg on 
the wall.
*/
class Dragon {
  constructor (name, damage, type) {
    this.name = name;
    this.damage = damage;
    this.type = type;
  }

  // damage a wall based on dragon dmg
  attackWall (wall) {
    console.log(`${this.name}: AAaaAagGGggGrrrRRrDDDssSS`);
    wall.takeDamage(this.damage);
  }
}

module.exports = Dragon;