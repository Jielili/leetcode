/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            if (nums[i] == nums[nums[i]]) {
                return nums[i];
            }

            let temp = nums[i];
            nums[i] = nums[temp];
            nums[temp] = temp;
            console.log(nums);
        }
    }

    return -1;
};