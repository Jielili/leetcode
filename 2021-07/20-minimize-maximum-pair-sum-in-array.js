/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let res = Number.MIN_VALUE;
  const len = nums.length;
  const half = len / 2;
  for (let i = 0; i < half; i++) {
    res = Math.max(res, nums[i] + nums[len - 1 - i])
  }
  return res
};

console.log(minPairSum([3,5,4,2,4,6]))