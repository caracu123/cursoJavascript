// write a program that says "YUM" if your favourite ice cream flavour is chocolate
// or vanilla and "EWW" if its sth else.

const flavour1 = `chocolate`;
const flavour2 = `vanilla`;

let favourite = "chocolate";

console.log((favourite === flavour1 || favourite === flavour2) ? `YUMM` : `EWW`);

favourite = "strawberry";

console.log((favourite === flavour1 || favourite === flavour2) ? `YUMM` : `EWW`);