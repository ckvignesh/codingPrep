const printNum = (n) => {
  // numbers 1 - 200
  for (let i = 1; i <= n; i++) {
    // 3,5,7 - fizz buzz booze
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      console.log(i + " fizz buzz booze");
    }
    // 3,5 - fizz buzz
    else if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " fizz buzz");
    }
    // 5,7 - buzz booze
    else if (i % 5 == 0 && i % 7 == 0) {
      console.log(i + " buzz booze");
    }
    // 3,7 - fizz booze
    else if (i % 3 == 0 && i % 7 == 0) {
      console.log(i + " fizz booze");
    }
    // divisible by 3 -- fizz
    else if (i % 3 == 0) {
      console.log(i + " fizz");
    }
    // divisible by 5 -- buzz
    else if (i % 5 == 0) {
      console.log(i + " buzz");
    }
    // divisible by 7 -- booze
    else if (i % 7 == 0) {
      console.log(i + " booze");
    }
    // print other nums just like that
    else {
      console.log(i);
    }
  }
};

printNum(300);
