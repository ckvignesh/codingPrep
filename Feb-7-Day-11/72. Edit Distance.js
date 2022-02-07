var minDistance = function (word1, word2) {
  var n = word1.length;
  var m = word2.length;
  var dp = Array(n);

  for (var i = 0; i < n; i++) {
    dp[i] = Array(m);
    for (var j = 0; j < m; j++) {
      dp[i][j] = Math.min(
        getDp(i - 1, j, dp) + 1,
        getDp(i, j - 1, dp) + 1,
        getDp(i - 1, j - 1, dp) + (word1[i] === word2[j] ? 0 : 1)
      );
    }
  }

  return getDp(n - 1, m - 1, dp);
};

var getDp = function (i, j, dp) {
  if (i < 0 && j < 0) return 0;
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;
  return dp[i][j];
};

// https://leetcode.com/problems/edit-distance/
