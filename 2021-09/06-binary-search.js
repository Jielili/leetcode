/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0, high = nums.length-1;
  while (low <= high) {
    const mid = (low + high) >> 1
    if (nums[mid] < target) {
      low = mid+1
    } else if (nums[mid] > target) {
      high = mid -1
    } else {
      return mid
    }
  }
  return -1
};

console.log([-1,0,3,5,9,12],
  13)