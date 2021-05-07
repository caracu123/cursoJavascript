// 1. Take the following string and split it into an array.
const tastyString = 'dragon - panther - whale - giant squid - take-out - cat dog';
const tastyArray = tastyString.split(" - ");
console.log (tastyArray);

// 2. given array from part 1, join elements back together into a string.
const stringAgain = tastyArray.join(", ");
console.log (stringAgain);


// 3. think of a way to, given a string, quickly reverse the string.
const stringy = "Santiago Alejandro De La Vega";
var reverseStringy = "";
for (let i = stringy.length-1; i >= 0; i--){
  reverseStringy += stringy[i];
}
console.log(reverseStringy);