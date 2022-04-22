/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  let sum = 0, res = Number.MIN_SAFE_INTEGER, cur = 0
  const len = nums.length
  for (let i = 0; i < len; i++){
    sum += nums[i]
    cur += i*nums[i]
  }
  for (let i = 0; i < len; i++){
    res = Math.max(res, cur)
    cur = cur + sum - len * nums[len - i - 1]
  }
  return res
};

console.log(maxRotateFunction([100]))
console.log(maxRotateFunction([-8,5,-10,-5,-7,-2,-7,0,1,-10,4,-2,-2,-7,-6,-6]))