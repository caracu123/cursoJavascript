// write a function that when given a string, will return a copy of that string
// reversed

const stringA = 'This is a stringy string';
const stringB = 'This is not a string';
const stringC = 'Santiago';

let temp = '';
function reversal(a) {
  for (let i = a.length-1; i >= 0; i--) {
    temp += a[i];
  }
  return temp;
  
}
function reverse (string) {
  return string.split('').reverse().join('');
}
console.log(reversal(stringA));
temp = '';
console.log(reversal(stringB));
temp = '';
console.log(reverse(stringC));