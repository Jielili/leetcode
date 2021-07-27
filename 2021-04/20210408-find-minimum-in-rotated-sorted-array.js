/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // let min = nums[0],
  //   i = 1,
  //   len = nums.length;
  // while (i < len) {
  //   if (nums[i] < min) {
  //     min = nums[i];
  //     break;
  //   }
  //   i++;
  // }
  // return min;
  let [low, high] = [0, nums.length - 1]
  while (low < high) {
    const p = Math.floor((low + high) / 2)
    if (nums[p] < nums[high]) {
      high = p
    } else {
      low = p + 1;
    }
  }
  return nums[low];

};

console.log(findMin([3, 4, 5, 1, 2]))