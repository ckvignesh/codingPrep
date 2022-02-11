// find whether a number is prime or not
const primeCheck = (n) => {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  console.log(prime);
};
primeCheck(20);

// print prime numbers between s to e

const printPrime = (s, e) => {
  for (i = s; i <= e; i++) {
    // console.log(i);
    let count = 0;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        count++;
        break;
      }
    }
    if (i > 1 && count == 0) {
      console.log(i);
    }
  }
};

printPrime(1, 20);
