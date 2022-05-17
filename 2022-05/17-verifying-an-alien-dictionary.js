/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const map = new Map()
  for (let i = 0; i < order.length; i++){
    map.set(order[i], i+1)
  }
  for (let i = 1; i < words.length; i++){
    const len = Math.max(words[i].length, words[i - 1].length)
    for (let j = 0; j < len; j++){
      const m = map.get(words[i][j]) || -1
      const n = map.get(words[i - 1][j]) || -1
      if (m > n) {
        break
      } else if (m < n) {
        return false
      }
    }
  }
  return true
};

// console.log(isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))
// console.log(isAlienSorted(["word","world","row"],"worldabcefghijkmnpqstuvxyz"))
// console.log(isAlienSorted(["apple","app"],"abcdefghijklmnopqrstuvwxyz"))
console.log(isAlienSorted(["aa","a"],"abqwertyuioplkjhgfdszxcvnm"))