/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0, min = Number.MAX_VALUE, max = Number.MAX_VALUE;
  prices.forEach(v => {
    if (v <= min) {
      res = Math.max(res,max-min)
      min = v;
      max = v;
    } else if (v > max) {
      max = v;
    }
  })
  res = Math.max(res, max - min)
  return res
};
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))