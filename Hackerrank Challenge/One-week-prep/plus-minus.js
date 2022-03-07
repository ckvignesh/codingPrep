function plusMinus(arr) {
  let len = arr.length;
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zero = zero + 1;
    } else if (arr[i] > 0) {
      plus = plus + 1;
    } else if (arr[i] < 0) {
      minus = minus + 1;
    }
  }

  console.log((plus / len).toFixed(6));
  console.log((minus / len).toFixed(6));
  console.log((zero / len).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
