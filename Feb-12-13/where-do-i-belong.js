function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a == b) {
    return 0;
  }
}

function getIndexToIns(arr, num) {
  arr.sort(compare);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 20, 10], 19));
