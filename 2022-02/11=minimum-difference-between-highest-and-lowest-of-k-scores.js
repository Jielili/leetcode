// 1984. 学生分数的最小差值
// 给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。
// 从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。
// 返回可能的 最小差值 。

// 链接：https://leetcode-cn.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores

// 排序加遍历  
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort(a-b)
  let res = Number.MAX_VALUE
  for (let i = 0; i < nums.length - k + 1; i++){
    const diff = nums[i + k - 1] - nums[i]
    if (diff < res) {
      res = diff
    }
  }
  return res
};