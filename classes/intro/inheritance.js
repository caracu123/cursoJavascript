/*
(6 < fullnes]
full

(3 < fullnes <= 6]
not hungry

(0 < fullnes <= 3]
hungry

0
starving
*/

class Animal {
  constructor(name, weight, fullnessOutOf10) {
    this.name = name;
    this.weight = weight;
    this.howFast = null;

    // hunger is given to us based on a number out of 10
    this.hunger = 'starving';
    if (0 < fullnessOutOf10 && fullnessOutOf10 <= 3) {
      this.hunger = 'hungry';
    }
    else if (3 < fullnessOutOf10 && fullnessOutOf10 <= 6) {
      this.hunger = 'not hungry';
    }
    else if (fullnessOutOf10 >= 7) {
      this.hunger = 'full';
    }
  }
}

// all horses weigh 1500 pounds and are half full to start (5/10 fullness)
class Horse extends Animal {
  constructor(name) {
    super(name, '1500lbs', 5);
  }
}

const babyHorse = new Horse('fluffy');