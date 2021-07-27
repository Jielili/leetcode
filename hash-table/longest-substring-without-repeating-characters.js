/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0,
    left = 0,
    right = 0,
    len = s.length;
  const cur = new Map();
  while (left < len && right < len) {
    while (right < len && !cur.has(s[right])) {
      cur.set(s[right], right)
      right++;
    }
    max = Math.max(max, right - left)
    const move = cur.get(s[right]) + 1
    for (let i = left; i <= cur.get(s[right]); i++) {
      cur.delete(s[i])
    }
    left = move
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))