// 和为s的两个数字
// 双指针（好像递增的数组用双指针也行啊）
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let low = 0, high = nums.length - 1;
  while (low < high) {
    const sum = nums[low] + nums[high]
    if (sum > target) {
      high--
    } else if (sum < target) {
      low++
    } else {
      return [nums[low],nums[high]]
    }
  }
};
