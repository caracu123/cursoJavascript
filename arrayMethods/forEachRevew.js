/*
EXERCISE 1
write a forEach that, given an array of integers, prints out the cube of each element.
[3, 6, 8].forEach(?)
--------------------
27
216
512
*/
let elements1 = [3, 6, 8, ];
const printCube = (el) => console.log(el ** 3);
elements1.forEach(printCube)

/*
EXERCISE 2
write a function that given an array of numbers, sums up each number in the array.
[3, 6, -18, 24.3].forEach(?)
--------------------
3 + 6 + -18 + 24.3
15.3
*/

let sum = 0;
[3, 6, -18, 24.3].forEach((el) => {
  sum += el;
});
console.log(sum);