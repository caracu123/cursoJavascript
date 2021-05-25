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

const doStuffWithHyphens = (num, marker = '-') => {
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      console.log(marker.repeat(i));
    }
  }
  console.log(`\n${num}done\n`);
}
doStuffWithHyphens(0);
doStuffWithHyphens(1);
doStuffWithHyphens(2);
doStuffWithHyphens(4, '?');