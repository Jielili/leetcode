// 旋转字符串
// https://leetcode-cn.com/problems/rotate-string/
// 如果s从中间被切开，分成两半置换下位置拼接起来，可以拼成goal，那就返回true
// s.substring(i) + s.substring(0, i) === goal ( 0<=i<s.length)
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let i = 0;
  while (s.indexOf(goal[0], i) >= 0 && i<s.length) {
    i = s.indexOf(goal[0], i)
    if (s.substring(i) + s.substring(0, i) === goal) {
      return true
    }
    i++
  }
  return false
};

console.log(rotateString("abcde","cdeab"))
console.log(rotateString("abcde","abced"))