/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = ''
  const arr = []
  let last = 0
  for (let i = 0; i < s.length; i++){
    if (s[i] === '(') {
      arr.push('(')
    } else {
      arr.pop()
    }
    if (arr.length===0) {
      res += s.substring(last + 1, i )
      last = i + 1
    }
  }
  return res
};
console.log(removeOuterParentheses('(()())(())'))
console.log(removeOuterParentheses('(()())(())(()(()))'))
console.log(removeOuterParentheses('()()'))