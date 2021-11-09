/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let ans = 0;
  const dp = new Map();
  for (const v of arr) {
    dp.set(v, (dp.get(v - difference) || 0) + 1);
    ans = Math.max(ans, dp.get(v));
  }
  return ans;
};

console.log(longestSubsequence([-10, 21, 3, 25, -8, -14, -18, 19, -11, 6, 11, -3, 1, 21, 11, -15, 1, 0, -14, 9, -20, 3, 27, -24, -12, -2, 23],
  -3))

console.log(longestSubsequence([3, 0, -3, 4, -4, 7, 6],
  3))

console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1],
  -2))