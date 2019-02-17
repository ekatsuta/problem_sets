//Define a function, onlyOdds, that accepts a number as an argument. onlyOdds should should return the sum of all the odd numbers between the given number and 1.
//If onlyOdds receives an argument less than 1, it should return 0.

let onlyOdds = (num) => {
  let sum = 0;
    if (num >= 1) {
      for (let i = num; i >= 1; i--) {
        if (i % 2 !== 0) {
        sum += i;
      } else {
        continue;
      }
      }
    } else {
      return 0;
    }
  return sum;
}
