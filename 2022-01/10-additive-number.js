/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  const len = Math.floor(num.length / 2);
  for (let i = 0; i < len; i++){
    if (num[0] === '0' && i > 0) {
      break;
    }
    const len1 = Math.min(Math.floor((num.length - i) / 2), len)
    for (let j = i + 1; j < i + 1 + len1; j++){
      if (num[i + 1] === '0' && j > i+1) {
        break
      }
      let n1 = Number(num.substring(0, i+1))
      let n2 = Number(num.substring(i + 1, j + 1))
      let cur = num.substring(j+1)
      while (cur.length) {
        [n1, n2] = [n2, n1 + n2]
        const sum = n2 +''
        if (sum === cur.substring(0, sum.length)) {
          cur = cur.substring(sum.length)
          if (cur.length === 0) {
            return true
          }
        } else {
          break;
        }
      }
    }
  }
  return false
};

console.log(isAdditiveNumber("112358"))
console.log(isAdditiveNumber("199100199"))
console.log(isAdditiveNumber("1123589"))
console.log(isAdditiveNumber("101"))
console.log(isAdditiveNumber("0235813"))
console.log(isAdditiveNumber("199111992"))

