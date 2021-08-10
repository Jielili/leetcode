/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let diff = undefined;
    let res = 0, curr = 0;
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        const diff1 = nums[i] - nums[i - 1]
        if (diff !== diff1) {
            diff = diff1
            curr = 0
        } else {
            curr++
            res += curr
        }
    }

    return res
};

console.log(numberOfArithmeticSlices([1]))
