let arrayX = [];
let arrayY = arrayX;

// add 5 values to arrayX
for (let i = 0; i <5; i++) {
  arrayX.push(i);
}
console.log(arrayX);

//modify arrayY instead
for (let i = 0; i < 3; i++) {
  arrayY.push('Y');
}
console.log(arrayY, arrayX);

//now create a different array
const boxOfZebras = arrayY;
boxOfZebras.push('zebra');
console.log(boxOfZebras, arrayX, arrayY);

//now we change arrayY
arrayY = ['pigeon', 88 - 40];
console.log('boxOfZebras:', boxOfZebras, 'arrayX:', arrayX, 'arrayY:', arrayY);