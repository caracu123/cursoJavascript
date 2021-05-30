/*
create an object mapping nouns to adjectives that describe the nouns.
Each key should be a string and each value should be an array of 2 strings
where the elements are adjectives.

1. create the data structure with 5 different nouns (10 adjectives)
2. print out wether water is in your object keys.
3. delete your least favourite key
4. out of the remaining keys, delete the 2nd key
5. print out all the adjectives
6. overwrite the adjectives stored in ANY of the existing keys
*/

// 1. create data structure
console.log('1. create data structure\n');
const nounsAndAdjectives = {
  dirt: ['dirty', 'brown'],
  bicycle: ['fast', 'light'],
  dj: ['cool', 'relaxed'],
  computer: ['portatile', 'effective'],
  water: ['wet', 'refreshing'],
}
console.log(nounsAndAdjectives);

// 2. search for water
console.log('2. search for water\n');
if ('water' in nounsAndAdjectives) {
  console.log(`Found your water sire, and it's ${nounsAndAdjectives['water']}`);
}
else {
  console.log('Sorry, there is no water here.')
}
// 3. delete least favourite key
console.log('3. delete least favourite key\n');
delete nounsAndAdjectives.dirt;
console.log(nounsAndAdjectives);

// 4. out of the remaining keys, delete the 2nd key
console.log('4. delete the 2nd key\n');
delete nounsAndAdjectives[Object.keys(nounsAndAdjectives)[1]];
console.log(nounsAndAdjectives);

// 5. print out all the adjectives
console.log('5. print out all the adjectives\n');
console.log(Object.values(nounsAndAdjectives));

// 6. overwrite the adjectives stored in ANY of the existing keys
console.log('6. overwrite the adjectives stored in ANY of the existing keys \n');
nounsAndAdjectives.bicycle = ['superfast', 'superlight'];
console.log(nounsAndAdjectives);