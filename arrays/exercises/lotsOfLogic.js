// write 2 programs. given an array of only booleans, your program should print out the result of ANDing
// all the booleans together and another result ORing all the booleans together.

const bools = [true, false, true, false, false, true]
var andChain = bools[0];
var orChain = bools[0];
for (let i = 1; i < bools.length; i++) {
  andChain = andChain && bools[i];
  orChain = orChain || bools[i];
}
console.log(`${bools.join(' && ')} = ${andChain}`);
console.log(`${bools.join(' || ')} = ${orChain}`);