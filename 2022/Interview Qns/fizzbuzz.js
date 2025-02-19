function printTill(num) {
  let i;
  for (i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " fizzbuzz");
    } else if (i % 3 == 0) {
      console.log(i + " fizz");
    } else if (i % 5 == 0) {
      console.log(i + " buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(printTill(100));

// worked on rextester
