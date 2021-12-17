// 换酒问题

// 小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。
// 如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。
// 请你计算 最多 能喝到多少瓶酒。


/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let res = 0, empty = 0;
  while (numBottles > 0 || empty>=numExchange) {
    res += numBottles
    empty += numBottles
    numBottles = 0
    if (empty >= numExchange) {
      numBottles += Math.floor(empty / numExchange)
      empty = empty %numExchange
    }
  }
  return res
};

console.log(numWaterBottles(2,3))