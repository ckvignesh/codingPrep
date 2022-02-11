function convertToF(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function convertToC(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

// for (let i = 500; i > -500; i--) {
//   if (convertToC(i) === i) {
//     console.log(i);
//   }
// }

let low = -500;
let high = 500;
let item = 40;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  const guess = 0;

  if (guess === convertToC(guess)) {
    return guess;
  }
  if (guess > item) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

// ans = -40
