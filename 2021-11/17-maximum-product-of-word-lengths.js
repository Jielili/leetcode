/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const marks = []
  for (const v of words) {
    let mark = 0
    for (let i = 0; i < v.length; i++){
      mark |= (1 << (v[i].charCodeAt() - 'a'.charCodeAt()))
    }
    marks.push(mark)
  }
  let res = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++){
      if ((marks[i] & marks[j]) === 0) {
        res = Math.max(res, words[i].length*words[j].length)
      }
    }
  }
  return res
};
console.log(maxProduct( ["a","aa","aaa","aaaa"]))