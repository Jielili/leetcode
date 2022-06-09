/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
    let n = nums.length, ret = 0, x = nums[Math.floor(n / 2)];
    for (let i = 0; i < n; i++) {
        ret += Math.abs(nums[i] - x);
    }
    return ret;
};

// console.log(minMoves2([1,2,3]))
// console.log(minMoves2([1,10,2,9]))
console.log(minMoves2([1,0,0,8,6]))