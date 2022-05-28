/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let arr1 = [], arr2 = []
  words.forEach((val, i) => {
    if (val === word1) {
      arr1.push(i)
    }
    if (val === word2) {
      arr2.push(i)
    }
  })
  let res = Number.MAX_SAFE_INTEGER
  let p = 0;
  if (arr2.length < arr1.length) {
    [arr1, arr2] = [arr2, arr1]
  }
  const len = arr2.length
  arr1.forEach(val => {
    while (arr2[p] < val && p < len-1) {
      p++
    }
    res = Math.min(res, Math.min(Math.abs(val-arr2[(p||1)-1]), arr2[p]-val))
  })
  return res
};

console.log(findClosest(["I","am","a","student","from","a","university","in","a","city"], "a", "student"))