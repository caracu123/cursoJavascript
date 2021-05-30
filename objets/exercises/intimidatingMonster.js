/*
there's this monster in town and it likes to scare people. However this monster is 
actually a coward, so when it gets confronted by someone who isn't scared, it
tries to avoid conflict by talking about itself in the 3rd person and bragging
about how dangerous it is.

setup an object that represents this monster with the following properties:
- name - string
- danger level - string/number
- something to brag about (i ate 3 pizzas by myself) - string
- intimidate person - function that takes in a persons name as argument
*/

const person = 'Mili';
const monster = {
  name: 'Baghi',
  dangerLevel: 800,
  brag: [
    'i eat everything i can',
    'i poop like 7 times a day',
    'and my turds have a legendary smell',
  ],
  intimidate: function (name) {
    console.log(`${this.name} will eat your soul ${name}!!! NOM NOM YUMMYY. I have a danger level of ${this.dangerLevel}, and also ${this.brag.join(', ')}. Prepare your nose to get burnt muahahahaha!`)
  }
};
monster.intimidate(person);