function telephoneCheck(str) {
  // clean string
  const cleanStr = str.replace(/[^0-9]/g, "");
  // check if string has 10 or 11 digits
  if (cleanStr.length === 10) {
    return true;
  } else if (cleanStr.length === 11 && cleanStr[0] === "1") {
    return true;
  } else {
    return false;
  }
}
telephoneCheck("555-555-5555");

// true in cases of
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
