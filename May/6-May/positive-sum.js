// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0

function positiveSum(arr) {
  for (let i = 0; (n = arr.length); i++) {
    let sum;
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  console.log(sum);
}

positiveSum([1, -4, 7, 12]);
