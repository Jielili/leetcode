function coinChange(coins, amount) {
    var dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var coin = coins_1[_i];
        for (var j = coin; j < amount + 1; j++) {
            dp[j] = Math.min(dp[j], dp[j - coin] + 1);
        }
    }
    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}


console.log(coinChange([1],0))
