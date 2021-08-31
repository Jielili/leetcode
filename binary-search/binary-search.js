/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
    }else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};



var search1 = function (nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[low]
}

console.log(search1([1,2,3,5,11,24,33,89,123],11))