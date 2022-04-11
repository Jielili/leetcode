// 不用加减乘除做加法

// 这也简单题？ 让我想起了被幂运算支配的恐惧
// 位运算  非进位的和 + 进位和 
// 非进位和 a^b  ----  n
// 进位和 (a&b) << 1  ---- c
// n 或者 c 为 0 时则结束
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // while (b != 0) {
  //   const c = (a & b) << 1;
  //   a ^= b;
  //   b = c;
  // }


  // return a
  // while (a != 0) {
  //   const c = (a & b) << 1;
  //   b ^= a;
  //   a = c;
  // }
  // return b


  if (a == 0 || b == 0) {
    return a || b
  }
  return add((a & b) << 1, a^b)
};