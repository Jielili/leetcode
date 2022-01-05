// 和为s的连续正数序列

// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 连续递增数组很容易用到滑动窗口，双指针

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let low = 1; high = 2, sum = 3;
  const res = [];
  if (target < sum) {
    return res
  }
  while (low < high && 2 * high <= target + 1) {
    if (sum == target) {
      res.push(new Array(high-low+1).fill(0).map((v,i)=>i+low))
    }
    if (sum < target) {
      high++
      sum += high
    } else {
      sum -= low;
      low++;
    }
  }
  return res;
};

console.log(findContinuousSequence(10))