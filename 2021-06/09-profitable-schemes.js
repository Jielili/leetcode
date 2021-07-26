/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
    const dp = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0).map((m, i) => i == 0 ? 1 : 0));
    const len = group.length;
    for (let i = 0; i < len; i++) {
        const mi = profit[i], ni = group[i];
        for (let j = n; j >= ni; j--) {
            for (let k = minProfit; k >= 0; k--) {
                dp[j][k] = dp[j][k] + dp[j - ni][Math.max(0,k - mi)];
            }
        }
    }
    return dp[n][minProfit];

};

console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]))