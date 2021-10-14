// Allows us to perform a function on each element in an array
function print (thing) {
  console.log(`||| ${thing} |||`);
}

function collectInObject (object, key) {
  object[key] = key;
}

let testArray = ['cat', 2, 'dog', -17, false];
let someObject = {};
console.log(someObject);
testArray.forEach(print);
testArray.forEach(element => collectInObject(someObject, element))
console.log(someObject);

/*
testArray.forEach(print);
  print(testArray[0])
  print(testArray[1])
  print(testArray[2])
  print(testArray[3])
  print(testArray[4])
*/