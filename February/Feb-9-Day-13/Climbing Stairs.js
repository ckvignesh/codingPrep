var climbStairs = function (n) {
  var dp = [0, 1];
  for (var i = 0; i < n; i++) {
    dp = [dp[1], dp[0] + dp[1]];
  }
  return dp[1];
};

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// https://leetcode.com/problems/climbing-stairs/
