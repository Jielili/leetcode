function largestNumber(cost: number[], target: number): string {
  const dp = new Array(target + 1).fill('');
  for (let i = 1; i < cost.length + 1; i++) {
    const c = cost[i - 1];
    for (let j = c; i < target + 1; j++) {
      dp[j] = i + dp[j - c]
    }
  }
  return dp[target]
};