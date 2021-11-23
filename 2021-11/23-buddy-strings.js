/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  const len = s.length
  if (len !== goal.length) {
    return false
  }
  const a = []
  for (let i = 0; i < len; i++){
    if (s[i] !== goal[i]) {
      a.push(i)
    }
  }
  if (a.length === 0) {
    const b = s.split('')
    const c = [...new Set(b)]
    if (b.length > c.length) {
      return true
    } else {
      return false
    }
  }
  if (a.length === 2 && s[a[0]]===goal[a[1]] && s[a[1]]===goal[a[0]]) {
    return true
  }
  return false
};

console.log(buddyStrings('ab','babbb'))