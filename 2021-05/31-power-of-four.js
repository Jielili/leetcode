/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n > 1) {
    if (n % 4 === 0) {
      n = n / 4;
    } else {
      return false;
    }
  }
  return n === 1;
};