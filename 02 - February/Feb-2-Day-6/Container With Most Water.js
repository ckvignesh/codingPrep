var maxArea = function (height) {
  var max = 0;
  var l = 0;
  var r = height.length - 1;
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

// https://leetcode.com/problems/container-with-most-water/
