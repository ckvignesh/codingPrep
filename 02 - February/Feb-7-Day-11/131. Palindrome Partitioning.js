var partition = function (s) {
  var dp = getDp(s);
  var res = [];
  var now = [];
  dfs(dp, res, now, s, 0);
  return res;
};

var dfs = function (dp, res, now, s, index) {
  var len = s.length;
  if (index === len) {
    res.push(Array.from(now));
    return;
  }
  for (var i = index; i < len; i++) {
    if (dp[index][i]) {
      now.push(s.substring(index, i + 1));
      dfs(dp, res, now, s, i + 1);
      now.pop();
    }
  }
};

var getDp = function (s) {
  var len = s.length;
  var dp = Array(len);
  for (var i = 0; i < len; i++) {
    for (var j = 0; j <= i; j++) {
      if (!dp[j]) dp[j] = Array(len);
      dp[j][i] = s[i] === s[j] && (i - j <= 2 || dp[j + 1][i - 1]);
    }
  }
  return dp;
};

// https://leetcode.com/problems/palindrome-partitioning/
