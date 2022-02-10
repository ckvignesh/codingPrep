function convertToF(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function convertToC(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

for (let i = 500; i > -500; i--) {
  if (convertToC(i) === i) {
    console.log(i);
  }
}

// ans = -40
