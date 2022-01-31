var mySqrt = function (x) {
  if (x < 2) return x;
  var left = 1;
  var right = x;
  var mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else if (mid + 1 > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};

// https://leetcode.com/problems/sqrtx/
// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator,
