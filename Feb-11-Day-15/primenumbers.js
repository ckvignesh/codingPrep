// print prime nos between so and so
const primeprint = (s, e) => {
  for (let i = s; i < e; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
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
console.log(primeprint(1, 100));

// // print non prime nos between so and so
// const nonprimeprint = (s, e) => {
//   for (let i = s; i < e; i++) {
//     let count = 0;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         count++;
//         break;
//       }
//     }
//     if (i > 1 && count == 0) {
//       console.log(i);
//     }
//   }
// };

// console.log(nonprimeprint(1, 100));

// const primecheck = (n) => {
//   let prime = "prime";
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       prime = "not prime";
//       break;
//     }
//   }
//   return prime;
// };

// console.log(primecheck(2));
// console.log(primecheck(70));
