/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) {
    return n - 1
  } else {
    const b = n % 3
    const a = Math.floor(n / 3)
    if (b === 0) {
      return Math.pow(3,a)
    } else if (b ===1){
      return Math.pow(3,a-1)*4
    } else {
      return Math.pow(3,a) *2
    }
  }
};