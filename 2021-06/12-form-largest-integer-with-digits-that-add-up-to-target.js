/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  const dp = new Array(target + 1).fill(null);
  dp[0] = '';
  for (let i = 1; i < cost.length + 1; i++) {
    const c = cost[i - 1];
    for (let j = c; j < target + 1; j++) {
      // if (dp[j - c] != null) {
      //   dp[j] = String(Math.max(Number(dp[j]), Number(i + dp[j - c])))
      // }
      if (dp[j - c] != null) {
        const x1 = dp[j],
        x2 = '' + i + dp[j - c];
        if (x1 === null) {
          dp[j] = x2;
          continue;
        }
        if (x1.length > x2.length) {
          dp[j] = x1;
        } else if (x1.length < x2.length) {
          dp[j] = x2;
        } else {
          dp[j] = x1;
          for (let k = 0; k < x1.length; k++) {
            if (x1[k] > x2[k]) {
              dp[j] = x1;
              break;
            } else if (x1[k] < x2[k]) {
              dp[j] = x2;
              break;
            }
          }
        }
      }
    }
  }
  return dp[target]
};

console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9))