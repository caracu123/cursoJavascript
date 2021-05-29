/*
supose we have an object that maps a sea creature's name to how rare it is (on a scale of 
  1 to 10, being 1 common and 10 very rare)
*/
const nameToRareness = {
  'whale': 9,
  'jellyfish': 5,
  'starfish': 6,
  'minnow': 2,
  'squid': 9,
};

const creature = 'minnow';
if (creature in nameToRareness) {
  console.log(`Here's how rare a ${creature} is: ${nameToRareness[creature]}`);
}
else {
  console.log(`We do not have any information about ${creature}`);
}

// figure out all the creatures that we have rarity info about
console.log(Object.keys(nameToRareness));
console.log(Object.values(nameToRareness));
console.log(Object.entries(nameToRareness));

// overrite a value in certain key
nameToRareness['minnow'] = 10;
console.log(nameToRareness);

// delete a key value pair
delete nameToRareness.starfish;
console.log(nameToRareness);