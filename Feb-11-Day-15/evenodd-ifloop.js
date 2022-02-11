function check(n) {
  if (n >= 0) {
    if (n % 2 === 0) {
      return "positive even number";
    } else {
      return "positive odd number";
    }
  } else if (n % 2 === 0) {
    return "negative even number";
  } else {
    return "negative odd number";
  }
}

console.log(check(12));
console.log(check(15));
console.log(check(-12));
console.log(check(-15));

function checkt(n) {
  if (n >= 0) {
    if (n % 2 === 0) {
      return "positive even number";
    } else {
      return "positive odd number";
    }
  }
  return "negative number";
}

console.log(checkt(12));
console.log(checkt(15));
console.log(checkt(-12));
console.log(checkt(-15));
