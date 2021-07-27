function numSquares(n: number): number {
  const maxValue: number = Number.MAX_VALUE;
  const dp: number[] = new Array(n + 1).fill(maxValue);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
      for (let j = 1; j * j <= i; j++) {
          dp[i] = Math.min(dp[i], dp[i - j * j]+1)
      }
  }
  return dp[n];
};

console.log(numSquares(12))