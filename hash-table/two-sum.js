/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum1 = function (nums, target) {
//   const len = nums.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };


var twoSum = function (nums, target) {
  const len = nums.length;
  const hash = new Map();
  for (let i = 0; i < len; i++) {
    // for (let j = i + 1; j < len; j++) {
    //   if (nums[i] + nums[j] === target) {
    //     return [i, j]
    //   }
    // }
    if (hash.has(target - nums[i])) {
      return [hash.get(target - nums[i]), i]
    }
    hash.set(nums[i], i)
  }
  console.log(hash)
};

console.log(twoSum(
  [2,7,11,15], 9))