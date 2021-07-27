/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  // ranges.sort((a,b)=> a[0]-b[0])
  // for (let i = 1; i < ranges.length;){
  //   const [low1, high1] = ranges[i - 1];
  //   const [low2, high2] = ranges[i];
  //   if (high1 >= low2-1) {
  //     ranges[i - 1][1] = Math.max(high1, high2)
  //     ranges.splice(i,1)
  //   } else {
  //     i++;
  //   }
  // }
  // const len = ranges.length;
  // for (let i = 0; i < len; i++){
  //   const [low, high] = ranges[i];
  //   if (low <= left && high >= right) {
  //     return true;
  //   }
  // }
  // return false;
  for (let i = 0; i < ranges.length; i++){
    const [low, high] = ranges[i];
    if (low <= left && high >= left) {
      if (high >= right) {
        return true;
      } else {
        left = high + 1;
        i = -1;
      }
    }
  }
  return false;
};

console.log(isCovered([[1,10],[10,20]],21,21))