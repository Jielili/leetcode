function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (const coin of coins) {
    for (let j = coin; j < amount + 1; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1)
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1: dp[amount]
};
