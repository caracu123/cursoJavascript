// iteratively reverse a string
let someString = 'some string goes here?';
let reverse = '';
for (let i = someString.length -1; i >= 0; i--) {
  reverse += someString[i];
}
console.log (`${someString} reversed: ${reverse}`);

// now the recursion solution
const reverseStringLikeLoop = (stringToReverse, nextIndex) => {
  // stop recursing
  if (nextIndex < 0) return '';

  // build up a recursive result
  return stringToReverse[nextIndex] + reverseStringLikeLoop(stringToReverse, nextIndex - 1)
}
console.log(reverseStringLikeLoop("cat",'cat'.length - 1));

const reverseStringByChopping = string => {
  // get last character in string
  const lastChar = string[string.length - 1];

  // stop recursion
  if (string.length === 1) return lastChar;
  return lastChar + reverseStringByChopping(string.slice(0, -1));
}
console.log(reverseStringByChopping('dog'));
