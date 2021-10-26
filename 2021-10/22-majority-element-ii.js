/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const len = nums.length;
  const count = Math.floor(len/3)
  const end = len - count
  nums.sort((a, b) => a - b)
  const res = [];
  for (let i = 0; i < end; i++){
    if (nums[i] === nums[i + count]) {
      res.push(nums[i])
      i+=count
    }
  }
  return [...new Set(res)];
};

console.log(majorityElement([3,2,3]))