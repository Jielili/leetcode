/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sortArr = [...nums];
  sortArr.sort((a, b) => a - b)
  let start = -1, end = -1;
  const len = nums.length;
  for (let i = 0; i < len; i++){
    if (nums[i] != sortArr[i]) {
      start = i;
      break
    }
  }
  for (let i = len-1; i >= 0; i--){
    if (nums[i] != sortArr[i]) {
      end = i;
      break
    }
  }
  return end===-1?0:end - start +1;
};

console.log(findUnsortedSubarray([1])) 