/*
1. Use slice to get a copy of the animalsArray
2. get a copy of the animalsArray including every element but the last 2
3. using the array from part 2 add any animal on to the end and store the middle
of the resulting array into another array.
*/

const animals = ['zebra', 'elephant', 'lion', 'penguin'];

//1. Use slice to get a copy of the animalsArray
let slice1 = animals.slice();
console.log('slice1:', slice1);
//2. get a copy of the animalsArray including every element but the last 2
let slice2 = animals.slice(0, -2); // slice all values except last 2
console.log('slice2:', slice2);
//3. using the array from part 2 add any animal on to the end
slice2.push('wanda');
//3.1 store the middle in another array
slice3 = slice2.slice(1, 2);
console.log('slice2:', slice2, 'slice3:', slice3);