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

  if (string.length > 1) {
      let integer = romanNumObj[string[string.length - 1]];
      for (let i = string.length - 1; i > 0; i--) {
          const curr = romanNumObj[string[i]];
          const prev = romanNumObj[string[i - 1]];
          if (prev < curr) {
              integer = integer - prev;
          } else {
              integer = integer + prev;
          }
      }
      return integer;
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
