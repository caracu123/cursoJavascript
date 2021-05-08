// 1. Create an array with the numbers 0 to 8 (inclusive). only the whole numbers.

console.log('ARRAY 1:')
const arr1 = [];
for (let i = 0; i <= 8; i++) {
  arr1.push(i);
}
console.log('Array 1: ', arr1);

// 2. Add elements in reverse order
console.log('\nARRAY 2:')
let arr2 = []
for (let i = 8; i >= 0; i--) {
  arr2.unshift(i);
}
// test array
console.log('Array 2: ', arr2);

// 3. remove all elements in array 1 using the remove from front
// method, but also print out the array at each loop iteration.
console.log(`EXERCISE 3:\n----------------------------`);

while (arr1.length > 0) {
  const removed = arr1.shift();
  console.log('Removed: ', removed, 'New Array: ', arr1);
}

// 4. remove all elements in array 2 using the remove from back
// method and still print out array at each loop iteration.
console.log(`EXERCISE 4:\n----------------------------`);
while (arr2.length > 0) {
  const removed = arr2.pop();
  console.log('Removed: ', removed, 'New Array:', arr2);  
}