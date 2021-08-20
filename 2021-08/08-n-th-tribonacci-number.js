/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let t0 = 0, t1 = 1, t2 = 1
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  while (n > 2) {
    [t0, t1, t2] = [t1, t2, t0 + t1 + t2]
    n--
  }
  return t2;
};
console.log(tribonacci(4))