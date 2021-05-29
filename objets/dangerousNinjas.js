/*
There is a list of dangerous ninjas anbd it's important that we know who is how 
dangerous. Therefore, we'll create an array to know, relatively, how dangerous a certain 
ninja is.
*/

// ['jayla', 'bobby', 'zach']

const createNinja = (name, weapon, dangerLevel) => ({
    name,
    weapon,
    dangerLevel,
  });
const ninjaArray = [
  createNinja('jayla', 'katana', 9001),
  createNinja('bobby', 'stick', 100),
  createNinja('zach', 'left over candy for throwing', -5)
];
console.log(ninjaArray);

// print out most to least dangerous only names
const mostToLeastDangerous = [];
for (let i = 0; i < ninjaArray.length; i++) {
  mostToLeastDangerous.push(ninjaArray[i].name);
}
console.log('Most to least dangerous:', 
mostToLeastDangerous.join(', ')
);

// print out from least dangerous to most
const leastToMostDangerous = [];
for (let i = ninjaArray.length -1; i > -1; i--) {
  leastToMostDangerous.push(ninjaArray[i].name);
}
console.log('Least to most dangerous:', 
leastToMostDangerous.join(', ')
);

// print second most dangerous weapon
console.log('Second deadliest weapon:', ninjaArray[1].weapon);