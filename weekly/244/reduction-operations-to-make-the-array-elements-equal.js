/**
 * @param {number[]} nums
 * @return {number}
 */
 var reductionOperations = function(nums) {
     let count = 0, lastlargest = null, nextLargest = null;
     nums.sort((a,b)=> b-a);
     while(true){
         lastlargest = nums[0],nextLargest = null;
         for(let i = 1;i<nums.length; i++){
             if(nums[i]<lastlargest){
                 nextLargest = nums[i];
                 nums.splice(i,0,nextLargest);
                 nums.shift();
                 count++;
                 break;
             }
         }
         if(!nextLargest){
             break;
         }
     }
     return count;
};

console.log(reductionOperations([5,1,3]))