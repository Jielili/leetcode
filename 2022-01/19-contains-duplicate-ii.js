// 存在重复元素 II
// 给你一个整数数组 nums 和一个整数 k ，
// 判断数组中是否存在两个 不同的索引 i 和 j ，
// 满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
// 如果存在，返回 true ；否则，返回 false 。

// 首先我觉得是滑动窗口，
// 但是不知道窗口内部的元素如何相互比对
// 遂放弃，决定遍历
// 遍历 用时超大！！！

// 看题解还是滑动窗口，竟然用到了哈希
// 哈希果然好用

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set(),len = nums.length
  for (let i = 0; i < len; i++){
    if (i > k) {
      set.delete(nums[i-k-1])
    }
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))