//Define a function, myIndexOf, that accepts three arguments:

//source (string)
//searchValue (string)
//startIdx (number) - optional
//If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurance of the searchValue. If the searchValue doesn't exist in the source, return -1.

//If a startIdx is passed into the function, ignore any instances of the searchValue that occur before that index. If no startIdx is provided, start searching from the beginning of the source.

//Do not use the built-in .indexOf string method in your answer. Feel free to use it in all future workshop problems though!


let myIndexOf = (src, searchVal, startIdx) => {
  if (startIdx === undefined) {
    for (let i = 0; i < src.length; i++) {
      let newStr = src.slice(i, i + searchVal.length)
      if (newStr === searchVal) {
        return i;
      }
     };
  }

  if (startIdx) {
    for (let i = startIdx; i <src.length; i++) {
      let newStr = src.slice(i, i + searchVal.length);
      if (newStr === searchVal) {
        return i;
      }
    }
  }
  return -1;
}

//let someString = 'here and there';
//console.log(someString.slice(1, 4));

//Slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//Syntax: str.slice(beginIndex[, endIndex])

 
