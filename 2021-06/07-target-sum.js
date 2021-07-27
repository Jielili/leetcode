/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0);
  const diff = sum - target;
  if (diff < 0 ||diff % 2 !== 0) {
    return 0;
  }
  const negSun = diff / 2;
  const dp = new Array(negSun + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    for (let j = negSun; j >= item; j--) {
      dp[j] = dp[j] + dp[j - item];
    }
  }

  return dp[negSun]
};

console.log(findTargetSumWays([2,7,9,2,10], 12))