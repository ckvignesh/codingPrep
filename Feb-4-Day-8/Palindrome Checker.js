function palindrome(str) {
  // 1. Remove non alphanumeric characters
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "");
  // 2. Convert to lowercase
  const lowerStr = cleanedStr.toLowerCase();
  // 3. Reverse the string
  const reversedStr = lowerStr.split("").reverse().join("");
  // 4. Compare the two strings & return T/F
  if (reversedStr === lowerStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

// PseudoCode
// 1. Remove non alphanumeric characters
// 2. Convert to lowercase
// 3. Reverse the string
// 4. Compare the two strings & return T/F

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
