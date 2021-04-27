/*
operator precedence for bool operators
()
!
&&
||
*/

const example1 = (false || true) && false;
/*
true && false;
false;
*/
const example2 = true || (false && true || false);
/*
true || (false || false);
true || false;
true;
*/
const example3 = false || (true && !(false || true)) && false;
/*
false || (true && !(true) && false;
false || (true && false) && false;
false || false && false
false || false
false

*/