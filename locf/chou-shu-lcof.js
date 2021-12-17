// 丑数
// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

// 只包含质因子2、3、5的数就是 1*pow(2,n1)*pow(3,n2)*pow(5,n3) 的数

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n).fill(1)
  let a = 0, b = 0, c = 0
  for (let i = 1; i < n; i++){
    const xa = dp[a] * 2, xb = dp[b] * 3, xc = dp[c] * 5;
    dp[i] = Math.min(xa, xb, xc);
    if (dp[i] === xa) {
      a++
    }
    if (dp[i] === xb) {
      b++
    }
    if (dp[i] === xc) {
      c++
    }
  }
  return dp[n-1]
};


console.log(nthUglyNumber(10))