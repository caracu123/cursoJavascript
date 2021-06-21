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
  constructor (name, weight, fullnessOutOf10, howFast = null) {
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

  // make animal sound
  makeMouthSound () {
    console.log(`${this.name} goes "ugh"`);
  }
}

// all Giant Rabbits weigh 1500 pounds and are half full to start (5/10 fullness)
class GiantRabbit extends Animal {
  constructor (name, furColour = 'brown') {
    super(name, '1500lbs', 5, 'very fast');
    this.furColour = furColour;
  }

  makeMouthSound () {
    console.log(`${this.name} goes "thump thump"`);
    super.makeMouthSound();
  }
}

// tiny tortoises weigh 20lbs, are full by default and they're extremely slow

class TinyTortoise extends Animal {
  constructor (name, shellNiceness) {
    super(name, '20lbs', 10, 'extremely slow');
    this.shellNiceness = shellNiceness;
  }
  makeMouthSound () {
    console.log(`${this.name} first shows off their ${this.shellNiceness} shell and then goes "meeehhh"`);
  }
}

const vanillaAnimal = new Animal();
// console.log(vanillaAnimal);

const babyGiantRabbit = new GiantRabbit('fluffy');
const daddyTinyTortoise = new TinyTortoise('scruffy', 'VERY nice');
babyGiantRabbit.makeMouthSound();
// daddyTinyTortoise.makeMouthSound();
// vanillaAnimal.makeMouthSound();
// console.log(babyGiantRabbit);
// console.log(daddyTinyTortoise);