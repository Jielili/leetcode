/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < strs.length; i++) {
    const item = strs[i];
    const zeros = (item.match(/0/g) || []).length;
    const ones = item.length - zeros;
    for (let mi = m; mi >= zeros; mi--) {
      for (let ni = n; ni >= ones; ni--) {
        dp[mi][ni] = Math.max(dp[mi][ni], dp[mi - zeros][ni - ones] + 1)
      }
    }
  }

  return dp[m][n];
};


console.log(findMaxForm(["10", "0", "1"], 1, 1));