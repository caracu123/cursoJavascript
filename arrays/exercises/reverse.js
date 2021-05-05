// write a program that given an array, makes a copy and reverses the order
// of the elements

// make copy of array
const arrayA = [1, 2, 3, 4];
const arrayB = [];

console.log(arrayA);

for (let i = arrayA.length-1; i >= 0; i--) {
  let temp = arrayA.pop();
  arrayB.push(temp);
}
console.log(`B = ${arrayB}`);

const arrayC = [1, 2, 3, 4];
const arrayD = [];
for (let i = arrayC.length-1; i >= 0; i--) {
  arrayD.push(arrayC[i]);
}
console.log(`D = ${arrayD}`);

const arrayE = [1, 2, 3, 4];
const arrayF = arrayE.slice();
arrayF.reverse();
console.log(`F = ${arrayF}`);
