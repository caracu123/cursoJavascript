// objects allow us to create very descriptive and specific pieces of data
const dragon = {name: 'felix', size: 'really big', age: 1000};

// print objects
console.log(dragon);

// access specific properties
console.log(`This is how big ${dragon.name} is: ${dragon.size}`);

// reset properties
dragon.age += 1;
console.log(`This is how old ${dragon.name} is: ${dragon.age}`);

// create new properties
dragon.favouriteIceCreamFlafour = 'vanilla';
console.log(dragon['favouriteIceCreamFlafour']);
console.log(dragon.favouriteIceCreamFlafour);


const differentDragon = {'name' : 'jeff', 'age' : 42};
differentDragon['favouriteRestaurant'] = "McDonand' s"
console.log(differentDragon);
