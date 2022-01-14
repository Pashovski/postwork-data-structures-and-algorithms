function romanNumeral(string) {
  // build object that give us integer values for each single symbol numeral
  const romanNumObj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  // check if string is more than one symbol
  if (string.length > 1) {
      // assign the last symbol's value to a counter variable
      let counter = romanNumObj[string[string.length - 1]];
      // loop over the roman numeral from last symbol to first (so in reverse/right to left)
      for (let i = string.length - 1; i > 0; i--) {
          // assign right symbol's integer value to right variable
          const right = romanNumObj[string[i]];
          // assign left symbol's integer value to left variable
          const left = romanNumObj[string[i - 1]];
          // compare symbols, in groups of 2 at a time
          // if left is less than right
          if (left < right) {
              // subtract left from counter
              counter -= left;
          } else {
              // else, if left is greater than or equal to right, add left to counter
              counter += left;
          }
      }
      return counter;
  } else {
      return romanNumObj[string];
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
