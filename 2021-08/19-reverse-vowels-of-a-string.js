/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const reg = /a|e|i|o|u|A|E|I|O|U/g
  const arr = s.split(reg)
  const letters = s.match(reg)||[]
  const len = letters.length-1
  return arr.reduce((acc, cur, i) => {
    return acc+cur+(letters[len-i]||'')
  },'')
};


console.log(reverseVowels(''))