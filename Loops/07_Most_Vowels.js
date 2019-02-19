//Define a function, mostVowels, that accepts one argument, a string of words.

//mostVowels should return the word that has the most vowels.



let mostVowels = (str) => {
  let wordArray = str.split('.').join('').split(',').join('').split(' ');
  let vowels = 'aeiouAEIOU';

  let maxVowelCount = 0;
  let maxWord = '';

  for (let i = 0; i < wordArray.length; i++) {
    let thisWord = wordArray[i];
    let vowelCounter = 0 ;

    for (let j = 0; j < thisWord.length; j++) {
      let thisLetter = thisWord[j];

      if (vowels.indexOf(thisWord[j]) !== -1) {
        vowelCounter ++;
      }
    }

    if (vowelCounter > maxVowelCount) {
      maxVowelCount = vowelCounter;
      maxWord = thisWord;
    }
  }

  return maxWord;

}

let someWord = 'measure';
let vowels = 'aeiouAEIOU';
console.log(vowels.indexOf('e'));

//let someString ='Give her hell from us, Peeves.'
//console.log(someString.split('.').join('').split(',').join('').split(' '));
// Prints: ["Give", "her", "hell", "from", "us", "Peeves"]
