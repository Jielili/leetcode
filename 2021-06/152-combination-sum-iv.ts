function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;
  // for (const num of nums) {
  //   for (let j = num; j < target + 1; j++) {
  //     dp[j] += dp[j - num];
  //   }
  // }
  for (let i = 1; i < target + 1; i++) {
    for (const num of nums) {
      if(num <= i){
        dp[i] += dp[i-num]
      }
    }
  }
  return dp[target]
};

console.log(combinationSum4([1, 2, 3], 4))