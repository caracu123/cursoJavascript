/*
there is an object called squid lord, representing the lord of squids and i want
you to tell me about her
*/

const squidLord = {
  doSquidThings: function () {
    console.log(`${this.name} goes BLOOP BLOOP`)
  },
  howManyArms: 100,
  isDangerous: true,
  level: 1000000,
  name: 'squid lord',
  sex: 'female',
};
// 1
console.log(squidLord);
console.log();

// 2
const squidLordKeys = Object.keys(squidLord);
for (let i = 0; i < squidLordKeys.length; i++) {
  const key = squidLordKeys[i];
  console.log(`key: ${key}, value:${squidLord[key]}`);
}
console.log();

// 3
for (let key in squidLord) {
  if (key === 'isDangerous') {
    console.log(key, squidLord[key]);
  }
}
console.log('FUNCTION:')
squidLord.doSquidThings();