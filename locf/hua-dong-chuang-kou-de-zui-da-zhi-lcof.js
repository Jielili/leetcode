/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const max = [],res = []
  let start = 0, end = 0;
  while (end < nums.length) {
    while (max[max.length - 1] < nums[end]) {
      max.pop()
    }
    max.push(nums[end])
    end++
    if (end - start > k) {
      if (max[0] === nums[start]) {
        max.shift()
      }
      start++
    }
    res.push(max[0])
  }
  return res.slice(k-1)
};

console.log(maxSlidingWindow([1,-1],1))