var threeSum = function (nums) {
  var len = nums.length;
  var res = [];
  var l = 0;
  var r = 0;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};

// https://leetcode.com/problems/3sum/
