"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var char = s.split("");
  let arr;
  for (let i = 0; i <= char.length; i++) {
    switch (char[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        arr.unshift(char[i]);
        break;
      default:
        arr.push(char[i]);
        break;
    }
    console.log(arr.join(""));
  }
}
