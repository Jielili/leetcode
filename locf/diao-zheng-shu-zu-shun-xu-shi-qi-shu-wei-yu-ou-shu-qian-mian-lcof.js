/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let i = 0, j = nums.length - 1
  while (i < j) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]] 
      j--
    } else {
      i++
    }
    if (nums[j] % 2 !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]] 
      i++
    } else {
      j--
    }
  }
  return nums
};
console.log(exchange([1,2,3,4,5,6,7,8,9]))
