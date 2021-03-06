// 至少是其他数字两倍的最大数
// 给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

// 请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const len = nums.length
  if (len === 1) {
    return 0
  }
  let secondMax = -1, max = -1,q = -1;
  for (let i = 0; i < len; i++) {
    const v = nums[i]
    if (v > max) {
      secondMax = max
      max = v
      q = i
    } else if (v > secondMax){
      secondMax = v;
    }
  }
  return max < 2 * secondMax ? -1 : q;
};

console.log(dominantIndex([0,0,3,2]))
console.log(dominantIndex([3,6,1,0,7,1,12,9,10,8,15]))
console.log(dominantIndex([1,0]))
console.log(dominantIndex([3,6,1,0]))
console.log(dominantIndex([1,2,3,4]))
console.log(dominantIndex([1]))