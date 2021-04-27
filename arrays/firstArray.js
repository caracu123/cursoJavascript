/*
arrays allow us to store multiple pieces of data. In javascript you
can store whatever you want in an array, including multiple types of
information, which is not the case in other languages.
*/
const arr = [17, false, `some string about my aunt john`];
console.log(arr);
console.log(`Length: ${arr.length}`, `\n------------------------------`);

//change array value
arr[1] = 'batman';
console.log(arr);
console.log(`Length: ${arr.length}`, `\n------------------------------`);

//add element at the back
arr.push(12);
console.log(arr);
console.log(`Length: ${arr.length}`, `\n------------------------------`);
//add element at the front
arr.unshift('tralala');
console.log(arr);
console.log(`Length: ${arr.length}`, `\n------------------------------`);
//remove element from end
arr.pop();
console.log(arr);
console.log(`Length: ${arr.length}`, `\n------------------------------`);
//remove element from end and store it in a variable to print it out
const oldLastElement = arr.pop();
console.log(arr, `Removed: ${oldLastElement}`);

arr.push(`some string about my aunt john`);
console.log(arr);
console.log(`Length: ${arr.length}`, `\n------------------------------`);

//remove first element
const oldFirstElement = arr.shift();
console.log(arr, `Removed: ${oldFirstElement}`);