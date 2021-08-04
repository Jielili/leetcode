/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  // const len = nums.length;
  // let count = 0;
  // for (let i = 0; i < len; i++){
  //   for (let j = i + 1; j < len; j++){
  //     for (let k = j + 1; k < len; k++){
  //       if (nums[i] + nums[j] <= nums[k] ||nums[i] + nums[k] <= nums[j]||nums[j] + nums[k] <= nums[i]) {
  //         continue;
  //       }
  //       count++;
  //     }
  //   }
  // }
  // return count;

  nums.sort((a, b) => a - b)
  let count = 0;
  const len = nums.length;
  for (let i = 0; i < len-2; i++){
    for (let j = i+1; j < len-1; j++){
      const sum = nums[i] + nums[j];
      let low = j + 1, high = len-1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (nums[mid] < sum) {
          low = mid + 1;
        } else {
          high = mid - 1
        } 
      }
      count += high - j 
    }
  }
  return count;
};

console.log(triangleNumber([2,2,3,4]))