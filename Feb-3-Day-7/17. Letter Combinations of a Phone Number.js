var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  var res = [""];
  var mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  bfs(res, 0, digits, mapping, true);
  return res;
};

var bfs = function (res, index, digits, mapping, lead) {
  if (res.length === 0 || index === digits.length) return;
  var tmp = res.pop();
  var chars = mapping[digits[index]];
  bfs(res, index, digits, mapping, false);
  for (var i = 0; i < chars.length; i++) res.push(tmp + chars[i]);
  if (lead) bfs(res, index + 1, digits, mapping, true);
};

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
