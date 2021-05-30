const createNinja = (name, weapon, dangerLevel) => ({
  name,
  weapon,
  dangerLevel,
});
const ninjaArray = [
createNinja('jayla', 'katana', 9001),
createNinja('bobby', 'stick', 100),
createNinja('zeke', 'left over candy for throwing', -5)
];
// console.log(ninjaArray);

// find ninja by specific name and know their danger level

let foundNinja = null;
const specialName = 'zeke';
for (let i = 0; i < ninjaArray.length; i++) {
  if (ninjaArray[i].name === specialName) {
    foundNinja = ninjaArray[i]
    break;
  }
}

// console.log(`${specialName}'s danger level: ${foundNinja.dangerLevel}`)

// change data structure for faster computer operations

const ninjasByName = {
  jayla: createNinja('jayla', 'katana', 9001),
  bobby: createNinja('bobby', 'stick', 100),
  zeke: createNinja('zeke', 'left over candy for throwing', -5),
}
console.log(ninjasByName[specialName].dangerLevel);

// find ninja with .find() function

foundNinjaFunction = ninjaArray.find(ninja => ninja.name === specialName);
console.log(`${specialName}'s danger level: ${foundNinjaFunction.dangerLevel}`)