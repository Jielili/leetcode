/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  const ans = [], len = arr.length;
  for (let i = 1; i < len-1; i++){
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      ans.push(i)
    }
  }
  return ans
};