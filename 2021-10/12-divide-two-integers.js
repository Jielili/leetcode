/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let flag = (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0) ? 1 : -1
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  const min = -Math.pow(2, 31), max = Math.pow(2, 31) - 1
  

  if (divisor === 1) {
    dividend *= flag
    return dividend > max ? max : (dividend < min ? min: dividend)
  }

  let res = 0, num = 1, mult = divisor
  while (dividend >= mult + mult) {
    num = num + num
    mult = mult + mult
  }
  while (dividend >= divisor) {
    // num = num >> 1
    // mult = mult >> 1
    if (dividend >= mult) {
      res += num
      dividend -= mult
    }
    num = num >> 1
    mult = mult >> 1
  }
  res = res * flag
  return res > max ? max : (res < min ? min: res)
};

console.log(divide(-2147483648,
  2))