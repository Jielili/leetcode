/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b);
    nums.unshift(0);
    const res = [], len = nums.length;
    for (let i = 0; i < len; i++) {
        if (!nums.includes(i) ) {
            res[1] = i;
        }
        if (i < len &&!res[0] &&  nums[i] === nums[i + 1]) {
            res[0] = nums[i]
        }
        if (res[0] && res[1]) return res;
    }

};

console.log(findErrorNums([1,5,3,2,2,7,6,4,8,9]));