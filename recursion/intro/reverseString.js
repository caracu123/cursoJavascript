// iteratively reverse a string
let someString = 'some string goes here?';
let reverse = '';
for (let i = someString.length -1; i >= 0; i--) {
  reverse += someString[i];
}
console.log (`${someString} reversed: ${reverse}`);