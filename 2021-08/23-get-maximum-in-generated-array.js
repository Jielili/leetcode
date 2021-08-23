/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  const res = [0, 1]
  let max = 1
  for (let i = 2; i <= n; i++){
    if (i % 2 === 0) {
      res[i] = res[i/2]
    } else {
      res[i] = res[Math.floor(i/2)]+res[Math.floor(i/2)+1]
    }
    max = Math.max(max,res[i])
  }

  return max
};

console.log(getMaximumGenerated(15))