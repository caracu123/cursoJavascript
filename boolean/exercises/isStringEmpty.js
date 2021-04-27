// write a program that prints out whether or not a string is empty

const example1 = `This is a mfking stringa`;
const example2 = ``;

console.log(`\nString 1 is empty: ${example1.length === 0}`);
console.log(`String 2 is empty: ${example2.length === 0}`);

console.log('\n----------\n')

console.log(`The String is empty: ${example1 === ``}`);
console.log(`The String is empty: ${example2 === ``}`);