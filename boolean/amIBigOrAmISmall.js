//write a program to tell if someone is big or small
// criteria is the following: you need to have a heigth of at least 80 inches or
// weigth over 250 lbs.

const heigthInInches = 35;
const weigthInPounds = 90;

const isHeigthBig = heigthInInches >= 80;
const isWeigthBig = weigthInPounds > 250;

// print out heigth/weigth
console.log(`Big Test:`)
console.log(
    `\nHeigth: ${heigthInInches}/80 in. Weigth: ${weigthInPounds}/250 lbs.`
);
const amIBig = isHeigthBig || isWeigthBig;
console.log(`I am big: ${amIBig} \n` + '\n ---------- \n');

// To figure out if we are small we need to have both our heigth < 40 and 
// weigth < 100
console.log(`Small Test: `)
console.log(
    `Height: ${heigthInInches}/40 in. Weigth: ${weigthInPounds}/100 lbs.`
);

const isHeigthSmall = heigthInInches < 40;
const isWeigthSmall = weigthInPounds < 100;
const amISmall = isHeigthSmall && isWeigthSmall;

console.log(`I am small: ${amISmall}` + '\n ---------- \n');