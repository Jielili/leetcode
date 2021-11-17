/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let res = 1n;
  // let flag = n < 0
  x = BigInt(x)
  if (n < 0) {
    x = 1n/x
    n = -n
  }
  while (n > 0) {
    if (n & 1 === 1) {
      res *= x
    }
    x *= x
    //就是说 2147483648 这个数右移会变成负数
    //-2147483648这个指数也很有意思呢，如果为了用移位取代除法来加速，负数是用补码表示的，补码的除法逻辑又不能用移位来解决...就需要取n的绝对值...因为int的取值范围是-2147483648到2147483647...所以java的Math.abs(n)在这个时候返回的还是-2147483648...leetcode的用例还是秀，这种边界...
    n = Math.floor(n/2)
  }
  return res
};

console.log(myPow(2.00000,
  -2147483648))