function combinationSum4(nums, target) {
    var dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    // for (const num of nums) {
    //   for (let j = num; j < target + 1; j++) {
    //     dp[j] += dp[j - num];
    //   }
    // }
    for (var i = 1; i < target + 1; i++) {
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var num = nums_1[_i];
            if (num <= i) {
                dp[i] += dp[i - num];
            }
        }
    }
    return dp[target];
}
;
console.log(combinationSum4([1, 2, 3], 4));
