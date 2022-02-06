var numDecodings = function (s) {
  var len = s.length;
  var tmp = 0;
  var tmp1 = 1;
  var tmp2 = 0;
  var num1 = 0;
  var num2 = 0;

  if (s === "" || s[0] === "0") return 0;

  for (var i = 1; i <= len; i++) {
    num1 = Number(s.substr(i - 1, 1));
    num2 = Number(s.substr(i - 2, 2));
    if (num1 !== 0) tmp += tmp1;
    if (10 <= num2 && num2 <= 26) tmp += tmp2;
    tmp2 = tmp1;
    tmp1 = tmp;
    tmp = 0;
  }

  return tmp1;
};

// https://leetcode.com/problems/decode-ways
