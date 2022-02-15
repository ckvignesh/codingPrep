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
