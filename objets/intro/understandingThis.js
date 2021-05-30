function printOutCurrentThis () { 
  console.log(this); 
}

const dog = {
  printOutThis: printOutCurrentThis,
  name: 'scruffy',
  type: 'canine',
}

const cat = {
  printOutThis: printOutCurrentThis,
  name: 'fluffy',
  type: 'feline',
}

cat.printOutThis();
dog.printOutThis();