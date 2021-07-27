/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  const len = nums.length;
  for (let i = len - 1; i > 0; i--) {
    nums[i] -= nums[i - 1]
  }
  nums[0] = 0;
  let res = 0;
  const process = new Array(len).fill(0)
  // for (let i = 2; i < len; i++) {
  //   nums[i] = nums[i - 1] + nums[i] * i
  // }
  for (let i = len - 1; i > 0; i--) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j]
      process[j] += sum;
      if (process[j] > k) {
        break;
      }
      res = Math.max(res, j - i + 1)
    }
  }
  console.log(process)
  return res + 1;
};

console.log(maxFrequency([3,9,6], 20))