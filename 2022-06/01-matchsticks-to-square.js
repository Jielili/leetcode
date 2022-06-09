/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const totalLen = matchsticks.reduce((pre, cur) => pre + cur, 0)
  if (totalLen % 4) {
    return false
  }
  const len = totalLen / 4
  for (let i = 0; i < matchsticks.length; i++){
    if (matchsticks[i] > len) {
      return false
    }
  }
  return true
};

console.log(makesquare([1,1,2,2,2]))
console.log(makesquare([3,3,3,3,4]))