function romanNumeral(string) {
  // type your code here
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
  // if string length is greater than 1
  if (string.length > 1) {
      // then turn string into array
      const numeralArr = string.split('');
      // start our final integer value at 0
      let integer = 0;
      // loop over array and compare its values using our romanNumObj
      // RULES:
      // if CURR is > PREV then CURR - PREV
      // else CURR < PREV then CURR + PREV
      numeralArr.forEach((el, i, arr) => {
          const prev = romanNumObj[arr[i - 1]];
          const curr = romanNumObj[el];
          let added = 0;
          if (curr > prev) {
              added = curr - prev;
              integer += added - prev;
          } else {
              integer += curr;
          }
      })
      return integer;
  // otherwise it's a single symbol numeral and its value can be derived directly from our romanNumObj object
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
