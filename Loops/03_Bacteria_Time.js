//Define a function, bacteriaTime, that accepts two arguments:
//currentNum (num) - number of starting bacteria
//targetNum (num) - desired number of bacteria
//Assuming that the number of bacteria double every 20 minutes, bacteriaTime should return the number of minutes required for the number of bacteria to grow from the currentNum to a number equal to or larger than the targetNum.
//You can assume the currentNum will be a positive integer. If the targetNum is smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.

let bacteriaTime = (currentNum, targetNum) => {
  if (targetNum < currentNum) {
    return 'targetNum must be larger than currentNum'
  }

  let totalTime = 0;

  while (currentNum < targetNum) {
    totalTime += 20;
    currentNum *= 2;
  }
  return totalTime;
}

//while loop is better to use here than for loop because we're not updating the number by set amount.
//the only thing that matters is the condition

console.log(bacteriaTime(1,8));
