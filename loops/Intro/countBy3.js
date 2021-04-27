// write a program that counts by 3 from [0, 20)
for (let i = 0; i < 20; i += 3) {
  if (i === 9 || i === 15) continue;
  console.log(i);
}