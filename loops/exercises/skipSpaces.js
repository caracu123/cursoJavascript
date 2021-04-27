/*
write a program that will take a string and create a version of
that string with no spaces in it. do this using iteration and use 
'continue' whenever the current character you're observing is a space.
However, your program should also stop once it's collected 20 chars.
*/

const string = `hola mundo los espacios me incomodan mucho porque tengo el apellido corto.`;
let modString = ``;
//remove spaces
for (i = 0; i < string.length; i++) {
  if (modString.length === 20) {
    break;
  }
  else {
    if (string[i] !== ` `) {
      modString += string[i];
    }    
    else continue 
  }      
}
console.log(modString);