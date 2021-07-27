/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((acc,cur)=>{
        return acc+cur;
    },0);
    let left=0,right=sum;
    for(let i = 0;i<nums.length;i++){
        left+=(nums[i-1]||0);
        right-=nums[i];
        if(left==right){
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]
    ));