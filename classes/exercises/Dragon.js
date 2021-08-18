/*
create a dragon class that has a name property, a damage property, and a type
property. Also write a method that allows the dragon to attack the wall. This
method should make the dragon do some kind of noise and then inflict dmg on 
the wall.
*/
class RegularDragon {
  constructor (name, damage, type = `regular`) {
    this.name = name;
    this.damage = damage;
    this.type = type;
  }

  // damage a wall based on dragon dmg
  attackWall (wall) {
    wall.takeDamage(this);
  }
}

// fire dragon
class FireDragon extends RegularDragon {
  constructor (name, damage) {
    super(name, damage);
    this.type = 'fire';
  }
}

// ice dragon
class IceDragon extends RegularDragon {
  constructor (name, damage) {
    super(name, damage);
    this.type = 'ice';
  }
}

// electric dragon
class ElectricDragon extends RegularDragon {
  constructor (name, damage) {
    super (name, damage);
    this.type = 'electricity';
  }
}

// export dragons
module.exports = {
  RegularDragon: RegularDragon,
  FireDragon: FireDragon,
  IceDragon: IceDragon,
  ElectricDragon: ElectricDragon,
}