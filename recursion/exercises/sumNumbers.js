/*
write a recursive function that will sum all numbers between 0 and some
positive number (n).
7 => 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7
*/

// recursive solution 0
function recursiveSum0 (n) {
  if (n === 1) return n;
  return n + recursiveSum0(n - 1);
};
/*
  sum (3)
  n = 3
  return 3 + sum(2)

    sum (2)
    n = 2
    return 2 + sum(1)

      sum (1)
      n = 1
      return 1
*/

// iterative solution
const iterativeSum = n => {
  let result = n;
  for (let i = n-1; i >= 0; i--) result += i;
  return result;
};

// non-iterative non-recursive solution
const quickSum = n => n * (n + 1) / 2

// recursive solution 1 (tail recursion)
const recursiveSum1 = (n, sumSoFar = 0) => {
  const nextSum = sumSoFar + n;
  if (n === 1) return nextSum;
  return recursiveSum1(n - 1, nextSum);
};


console.log(recursiveSum0(5));
console.log(iterativeSum(5));
console.log(quickSum(5));
console.log(recursiveSum1(5));