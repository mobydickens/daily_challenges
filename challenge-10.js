// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Bob Ross can see the 4th dimension"; // -> 10

function vowelCounter(str) {
  //first get the str to all uppervase so the check is consistent
  let newStr = str.toUpperCase();
  let split = newStr.split('')

  let total = 0;

  split.forEach(item => {
    switch (item) {
      case 'A':
        total++
        break;
      case 'E':
        total++
        break;
      case 'I':
        total++
        break;
      case 'O':
        total++
        break;
      case 'U':
        total++
        break;
      default: 
        break;
    }
  })
  return total;
}

console.log("Total vowels: ", vowelCounter(vowelString));