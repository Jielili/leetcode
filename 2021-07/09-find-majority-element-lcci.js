/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  const map = new Map(),
    len = Math.floor(nums.length / 2)
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (!map.has(item)) {
      map.set(item, 0)
    }
    map.set(item, map.get(item) + 1)
    if (map.get(item) > len) {
      return item
    }
  }
  return -1;
};

var majorityElement = function (nums) {
  let major = -1,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      major = nums[i]
    }
    major === nums[i] ? (count++) : (count--)
  }
  count = 0;
  nums.forEach(item => {
    major === item ? (count++) : null
  })
  if (count > Math.floor(nums.length / 2)) {
    return major;
  } else {
    return -1
  }
};

console.log(majorityElement([3,2]))