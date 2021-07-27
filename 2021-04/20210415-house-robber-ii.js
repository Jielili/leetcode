/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp0 = 0,
    dp1 = nums[0] || 0,

  for (let i = 1; i < nums.length; i++) {
    let tdp0 = Math.max(dp0, dp1);
    let tdp1 = dp0 + nums[i];
    dp0 = tdp0;
    dp1 = tdp1;
  }
  return Math.max(dp0, dp1);
};


console.log(rob([2,3,2]))