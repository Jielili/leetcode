// 扑克牌中的顺子
// 垃圾题

// 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
// 大小王可以当任何数字？？？？？？？

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  nums.sort((a, b) => a - b)
  let joker = 0;
  for (let i = 0; i < 5; i++){
    if (nums[i] === 0) {
      joker++
    } else if (nums[i] === nums[i + 1]) {
      return false
    }
  }
  return nums[4]-nums[joker]<5
};
console.log(isStraight([0,0,1,2,5]))