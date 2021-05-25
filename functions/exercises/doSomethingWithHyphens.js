/*
write a program thatdoes this:
0 =>

1 =>
-

2 =>
-
--
--

3 =>
-
--
--
---
---
---

4 =>
-
--
--
---
---
---
----
----
----
----

It should also be able to change the "-" character for any other.
*/

const number = 5;
let sum = 0;
let string = '';
// add hyphens function
function addHyphens (times, char) {
  if (times > 0){
    for (let i = 0; i < times; i++) {
      (string += char.repeat(times) + "\n") * i;
    }
  }
  else {string += ' ' + '\n'};
  return string;
}
for (i = 0; i <= number; i++) {
  addHyphens(sum, '?');
  sum ++
}
console.log(string);

/*
for (i = 0; i <= number; i++) {
  addHyphens(sum);
    function addHyphens (sum) {
    if (sum > 0){
      for (let i = 0; i < sum; i++) {
        string += '-'.repeat(sum) + "\n" * i;
    }
  }
  return string;
  sum ++

  number = 5
  i = 1
  sum = 1
  string =

*/
