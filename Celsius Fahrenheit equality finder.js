// problem to find which temperature is such that it's same in F and C
// C --> F func
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
  // console.log(fahrenheit); //test
}
// console.log(convertToF(40)); //test

// F --> C func
function convertToC(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
  // console.log(celsius); //test
}
// console.log(convertToC(40)); //test

// function
for (let i = 500; i > -500; i--) {
  if (convertToC(i) === convertToF(i)) {
    console.log(i);
  }
}
