/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // for (let i = 1; ; i++){
  //   if (i * i === num) {
  //     return true
  //   } else if (i*2 > num) {
  //     return false
  //   }
  // }
  let low = 1, high = num
  while (low <= high) {
    const mid = (high + low) >> 1
    const a = mid * mid
    if (a === num) {
      return true
    } else if (a > num) {
      high = mid - 1
    } else {
      low = mid+1
    }
  }
  return false
};