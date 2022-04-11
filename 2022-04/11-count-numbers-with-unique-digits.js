/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let res = 1, cur = 9;
  const diff = 9 - n;
  while (n > 0) {
    res += cur
    cur *= (n+diff)
    n--
  }
  return res
};
console.log(countNumbersWithUniqueDigits(0))
console.log(countNumbersWithUniqueDigits(1))
console.log(countNumbersWithUniqueDigits(2))
console.log(countNumbersWithUniqueDigits(3))