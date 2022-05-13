/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0
  for (let i = 0; i < strs[0].length; i++){
    let start = 0
    for (let j = 0; j < strs.length; j++){
      const m = strs[j].charCodeAt(i)
      if (m >= start) {
        start = m
      } else {
        res ++
        break
      }
    }
  }
  return res
};

console.log(minDeletionSize(["cba","daf","ghi"]))
console.log(minDeletionSize(["a","b"]))
console.log(minDeletionSize(["zyx","wvu","tsr"]))