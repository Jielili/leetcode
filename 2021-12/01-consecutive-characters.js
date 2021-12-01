/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let res = 0, x,count = 0;
  const len = s.length
  for (let i = 0; i < len; i++){
    if (s[i] === x) {
      count++
    } else {
      res = Math.max(res,count)
      count = 1;
      x = s[i];
    }
  }
      res = Math.max(res,count)
      return res
};

console.log(maxPower("leetcode"))