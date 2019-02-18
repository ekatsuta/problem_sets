//Define a function, crazyCaps, that accepts a string as an argument.
//crazyCaps should return a string in which every other character is capitalized.
//The first letter should be lower-cased.



let crazyCaps = (str) => {
  let newStr = str.split('');
  let finalStr = '';
  for (let i = 0; i < newStr.length; i++) {
    if (i === 0) {
      finalStr += newStr[i].toLowerCase();
    } else if (i % 2 === 0) {
      finalStr += newStr[i].toLowerCase();
    } else {
      finalStr += newStr[i].toUpperCase();
    }
  }
  return finalStr;
}

//let someString = 'fullstack is amazing'
//console.log(someString.split(''));

//let someOtherString = 'Fullstack is Awesome';
//let updatedString = someOtherString.split('');
//console.log(updatedString[0].toLowerCase());
