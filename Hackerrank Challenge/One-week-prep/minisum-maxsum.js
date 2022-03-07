function miniMaxSum(arr) {
  if (arr.length != 5) {
    console.log("array does not have 5 elements");
  } else {
    arr.sort();
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      minSum = minSum + arr[i];
    }
    for (let i = 1; i < arr.length; i++) {
      maxSum = maxSum + arr[i];
    }
    console.log(minSum, maxSum);
  }
}

miniMaxSum([1, 3, 5, 7, 9]);
