function numSquares(n) {
    var maxValue = Number.MAX_VALUE;
    var dp = new Array(n + 1).fill(maxValue);
    dp[0] = 0;
    dp[1] = 1;
    for (var i = 2; i < n + 1; i++) {
        for (var j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j]+1);
        }
    }
    return dp[n];
}
;
console.log(numSquares(13));
