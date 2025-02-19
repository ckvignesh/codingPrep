const arm = (n) => {
  //split nums into digits in an array
  let digits = n.toString().split("");
  let total = 0;
  // cube each of them and add them in a variable
  for (let i = 0; i < digits.length; i++) {
    total = total + Math.pow(parseInt(digits[i]), 3);
  }
  // console.log(total);
  if (total == n) {
    return true;
  }
  return false;
  //check with N
};

console.log(arm(153));
