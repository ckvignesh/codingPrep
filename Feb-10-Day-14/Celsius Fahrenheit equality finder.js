function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function convertToC(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

for (let i = 500; i > -500; i--) {
  if (convertToC(i) === convertToF(i)) {
    console.log(i);
  }
}
