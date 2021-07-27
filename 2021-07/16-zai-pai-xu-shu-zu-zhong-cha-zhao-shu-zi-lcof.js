/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // return nums.reduce((acc, cur) => {
  //   return acc + (cur === target)
  // }, 0)
  const len = nums.length;
  let low = 0,
    high = len - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
      high = mid - 1;
      while (nums[low] === target) {
        low++;
      }
      while (nums[high] === target) {
        high--;
      }
    }
  }
  console.log(low, high)
};

console.log(search([5, 7, 7, 7, 8, 8, 10], 6))