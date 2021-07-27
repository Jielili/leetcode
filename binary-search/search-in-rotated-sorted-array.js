/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (nums[mid] < target) {
      if (nums[low] > nums[high] && target >= nums[low] && nums[mid] < nums[low]) {
        high = mid - 1
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] > target) {
      if (nums[low] > nums[high] && target <= nums[high] && nums[mid] >= nums[low]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([1], 0))