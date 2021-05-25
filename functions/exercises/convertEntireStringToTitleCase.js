/*
Write a program that thakes this input:
the cat is brown and blue
THIS is a tic-tac-toe board

and returns this :
The Cat Is Brown And Blue
THIS is a Tic-tac-toe Board
*/

const string1 = 'the cat is brown and blue';
const string2 = 'THIS is a tic-tac-toe board';


function titleString (string) {
  var arrayString = string.split(' ');
  for (let i = 0; i < arrayString.length; i++) {
    arrayString[i] = arrayString[i][0].toUpperCase() + arrayString[i].slice(1);
  }
  let stringString = arrayString.join(' ');
  return stringString;
}

const string1ToTitleCase = titleString(string1);
const string2ToTitleCase = titleString(string2);
console.log(string1ToTitleCase);
console.log(string2ToTitleCase);

/*
TRACING FUNCTION
arrayString = [the] [cat] [is] [brown] [and] [blue]
for (let i = 0; i < arrayString.length; i++) {
    arrayString[0] = arrayString[i][0].toUpperCase() + arrayString[i].slice(1);
    the = t.toUpperCase() + [the].slice(1);
  }
*/