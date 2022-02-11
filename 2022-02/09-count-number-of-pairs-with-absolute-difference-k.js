//  2006. 差的绝对值为 K 的数对数目

// 给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。

// |x| 的值定义为：

// 如果 x >= 0 ，那么值为 x 。
// 如果 x < 0 ，那么值为 -x 。

// 链接：https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var countKDifference = function (nums, k) {
//   let res = 0;
//   for (let i = 0; i < nums.length-1; i++){
//     for (let j = i + 1; j < nums.length; j++){
//       if (Math.abs(nums[i] - nums[j]) === k) {
//         res++
//       }
//     }
//   }
//   return res
// };

// 就是说还可以用哈希, 一次遍历，但是内存消耗大
var countKDifference = function (nums, k) {
  let res = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++){
    res += (map.get(nums[i] - k) || 0)
    res += (map.get(nums[i] + k) || 0)
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  return res
};

console.log(countKDifference([1,2,2,1],
  1))