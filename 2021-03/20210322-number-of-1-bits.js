/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // return n.toString().split('').filter(item => item === '1').length;
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i) !== 0) {
      count++;
    }
  }
  return count;
};