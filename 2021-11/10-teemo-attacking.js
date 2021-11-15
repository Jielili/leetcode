/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  const len = timeSeries.length;
  let ans = 0
  for (let i = 0; i < len; i++){
    const diff = timeSeries[i+1] - timeSeries[i]
    if (diff < duration) {
      ans += diff
    } else {
      ans+= duration
    }
  }
  return ans
};

console.log(findPoisonedDuration([1,2],2))