var removeElement = function (nums, val) {
  var len = nums.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
  }
  return count;
};
