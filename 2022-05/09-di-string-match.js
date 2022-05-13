/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const a = new Array(s.length + 1).fill(0).map((v, i) => i)
  const res = []
  for (let i = 0; i < s.length; i++){
    if (s[i] === 'I') {
      res.push(a.shift())
    } else {
      res.push(a.pop())
    }
  }
  res.push(a.pop())
  return res
};

console.log(diStringMatch("IDID"))
console.log(diStringMatch("IDID"))
console.log(diStringMatch("IDID"))
console.log(diStringMatch("IDID"))