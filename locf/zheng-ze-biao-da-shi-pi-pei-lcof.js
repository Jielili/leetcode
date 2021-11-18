/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p.length === 0) {
    return s.length===0
  } else {
    const m = s.length > 0 && (p[0] === '.' || s[0] === p[0])
    if (p[1] !== '*') {
      return m && isMatch(s.substring(1),p.substring(1))
    } else {
      return (m && isMatch(s.substring(1),p))||isMatch(s,p.substring(2))
    }
  }
}; 

console.log(isMatch('a', '.*..a*'))