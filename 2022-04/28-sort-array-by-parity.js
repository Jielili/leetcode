/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  // let left = 0, right = nums.length - 1
  // while (left < right) {
  //   while (nums[left] % 2 === 0 && left<nums.length-1) {
  //     left++
  //   }
  //   while (nums[right] % 2 !== 0 && right>0) {
  //     right --
  //   }
  //   if (left < right) {
  //     [nums[left], nums[right]] = [nums[right], nums[left]]
  //   }
  // }
  // return nums

  const n = nums.length;
  const res = new Array(n).fill(0);
  let left = 0,
    right = n - 1;
  for (const num of nums) {
    if (num % 2 === 0) {
      res[left++] = num;
    } else {
      res[right--] = num;
    }
  }
  return res;

};

console.log(sortArrayByParity([3, 1, 2, 4]))
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([3, 2]))
console.log(sortArrayByParity([0, 2]))
console.log(sortArrayByParity([1, 3]))