/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const len = piles.length;
  const dp = new Array(len).fill(0).map((v,i) => piles[i]);
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < piles.length; j++) {
      dp[j] = Math.max(piles[i] - dp[j], piles[j] - [j - 1]);
    }
  }
  return dp[len - 1] > 0
};


console.log(stoneGame([5, 3, 4, 5]))