/*
write a program that describes some type of magical bear beast. It should have 5
properties:
number
string
boolean
array
function
*/

const bearBeast = {
  name: 'Yoghi',
  weightInKg: 800,
  male: true,
  cubs: [
    'Kimbo',
    'Baghi',
    'Oli',
    'Kira',
  ],
  fullStats: function () {
    return this.name + " " + this.weightInKg + " " + this.male + " " + this.cubs;
  }
};
console.log(bearBeast);
console.log(bearBeast.fullStats());