/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => b-a);
    const length=nums.length;
    const head=nums[0]*nums[1];
    const tail = nums[length-1]*nums[length-2];
    const res1=head*Math.max(nums[2],nums[length-1]);
    const res2=tail*Math.max(nums[length-2],nums[0]);
    return Math.max(res1,res2);
};
console.log(maximumProduct([1,2,3,4]))