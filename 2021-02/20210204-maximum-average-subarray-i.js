/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0,k).reduce((acc,cur)=>acc+cur,0);
    let max = sum;
    for(let i=0;i+k<nums.length;i++){
        sum-=nums[i];
        sum+=nums[i+k];
        max = Math.max(sum,max);
    }
    return max/k;
};
console.log(findMaxAverage([1,12,-5,-6,50,3],4));