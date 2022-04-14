/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let res = 0
  accounts.forEach(a => {
    res = Math.max(res,a.reduce((pre, cur) => pre + cur))
  })
  return res
};
console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))