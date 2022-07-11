var searchRange = function (nums, target) {
  var res = [-1, -1];
  var left = find(nums, target, true);
  var right = find(nums, target, false);
  if (!nums.length) return res;
  if (left > right) return res;
  return [left, right];
};

var find = function (nums, target, findLeft) {
  var left = 0;
  var right = nums.length - 1;
  var mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (findLeft && nums[mid] === target)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return findLeft ? left : right;
};
