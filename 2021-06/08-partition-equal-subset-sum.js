/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) {
    return false
  }
  const target = sum / 2;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    for (let j = target; j >= item; j--) {
      dp[j] = dp[j] + dp[j - item];
    }
  }

  return dp[target] ? true : false;
};

console.log(canPartition([1,5,11,5]))