/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b)
  let i = 0;
  while (k > 0) {
    nums[i] = -nums[i]
    k--
    if (i < nums.length -1 && (nums[i+1] <= 0 || nums[i+1]<nums[i])) {
      i++
    }
  }
  return nums.reduce((pre,cur)=>pre+cur,0)
};

console.log(largestSumAfterKNegations([1,3,2,6,7,9],
  3))