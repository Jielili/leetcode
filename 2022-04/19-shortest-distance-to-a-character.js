// 821. 字符的最短距离
// 两次遍历 

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const position = [],res = []
  for (let i = 0; i < s.length; i++){
    if (s[i] === c) {
      position.push(i)
    }
  }
  let left = position[0], right = position[0], leftp = 0, rightp = 0;
  for (let i = 0; i < s.length; i++){
    if (i > right) {
      leftp = rightp
      rightp++
      left = right
      right = position[rightp] || Number.MAX_SAFE_INTEGER
    }
    res.push(Math.min(Math.abs(i - left), Math.abs(right - i)))
  }
  return res
};

console.log(shortestToChar("loveleetcode","e"))