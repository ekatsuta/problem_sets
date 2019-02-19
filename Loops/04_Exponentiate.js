//Write a function exponentiate that accepts two arguments:
//base (number)
//power (number)
//exponentiate should return the result of raising the base by the power. Assume the power argument will always be an integer greater than or equal to zero. Don't forget that any number raised to the 0th power is equal to 1!

//Do not use the built-in Math.pow() method, but feel free to use it moving forward!

let exponentiate = (base, power) => {
  let finalNum = 1;
  for (i = 1; i <=power; i++) {
    finalNum *= base;
  };
  return finalNum;
}
