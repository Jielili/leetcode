/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, -1);
  let reminder = 0;
  for (let i = 0; i < nums.length; i++) {
    reminder = (reminder + nums[i]) % k;
    if (map.has(reminder)) {
      if (i - map.get(reminder) >= 2) {
        return true;
      }
    } else {
      map.set(reminder, i);
    }
  }
  return false;
};

console.log(checkSubarraySum([5, 0, 0, 0], 3))