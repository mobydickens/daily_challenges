//challenge-day-3

// Swap Case
// Below is a function that takes in a string and reverses the case of every character and returns the new string.
// It is currently in a broken state and does not run properly.
// It is possible to fix the code by only modifying the existing code, not adding new lines.

//test data
//'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
//'boB rOss IS thE OrIgInAl GanGster' Becomes 'BOb RoSS is THe oRiGiNaL gANgSTER'


function caseReverse(str) {
  var strArray = str.split('');
  //splits string at every LETTER
  for (var i = 0; i < strArray.length; i++) {
    //loops through the array of LETTERS

    //if current LETTER is exactly equal to an UPPER CASE letter
    if (strArray[i] === strArray[i].toUpperCase()) {
      strArray[i] = strArray[i].toLowerCase(); //turn that letter to LOWER CASE - HAVE TO STORE RESULT
    } else {
      strArray[i] = strArray[i].toUpperCase(); //otherwise turn the letter to UPPER CASE
    }
  }
  return strArray.join('');;
}

console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));