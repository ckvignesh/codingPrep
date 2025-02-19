function staircase(n) {
  let char = "#";
  let space = " ";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + char.repeat(i));
  }
  return n + "steps";
}

console.log(staircase(10));
console.log(staircase(18));
console.log(staircase(1));

// const repeat = (str, n) => {
//   console.log(str.repeat(n));
// };

// repeat("hello \n", 5);
