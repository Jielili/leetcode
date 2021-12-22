// 重复叠加字符串匹配

// 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。
// 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
  let res = 0, compare = ''
  while (true) {
    compare += a
    res++
    if (compare.indexOf(b) >= 0) {
      return res
    }
    if (res > 1 && compare.length-a.length > b.length) {
      return -1
    }
  }
};

console.log(repeatedStringMatch("abc",
"cabcabca"))