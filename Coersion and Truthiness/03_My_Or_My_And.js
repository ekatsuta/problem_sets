//Define a function, myOr, that accepts three arguments of any type.
//myOr should return the same result as the buit-in || operator:
// || operator returns the first truthy value or the last value if none are truthy

//Then, define a function, myAnd, that accepts three arguments of any type.
//myAnd should return the same result as the buit-in && operator:
// && operator returns the first falsey value or the last value if none are falsey

let myOr = (a, b, c) => {
  return a || b || c;
}

let myAnd = (a, b, c) => {
  return a && b && c;
}
