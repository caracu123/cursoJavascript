/*
given a string like mirror, write a function that returns the following output.

mirror => rorrim|mirror
*/

// this is the wrong way XD non-recursive non-iterative solution
const mirrorWithOutRecursionOrIteration = string => {
  return string.split('').reverse().join('') + '|' + string;
}
console.log(mirrorWithOutRecursionOrIteration('mirror'));

// iterative solution
const mirrorWithIteration = string => {
  let result = '|' + string;
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result;
}
console.log(mirrorWithIteration('mirror'));

// recursive solution
const mirrorWithRecursion = string => {
  // if no more characters to left or right, return pipe in middle
  if (string === '') return '|';
  let lastChar = string[string.length - 1];
  // here we create a string with the last character at the start and end
  // and then we slice the last char from the string, and then repeat
  return lastChar + mirrorWithRecursion(string.slice(0, -1)) + lastChar;
}
console.log(mirrorWithRecursion('mirror'));