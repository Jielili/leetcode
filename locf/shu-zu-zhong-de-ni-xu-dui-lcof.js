// 数组中的逆序对

/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs1 = function(nums) {
   const len = nums.length;
   let res = 0;
   for (let i = 0; i < len-1; i++){
     for (let j = i + 1; j < len; j++){
       if (nums[i] > nums[j]) {
         res++
       }
     }
   }
   return res
 };

 var reversePairs = function(nums) {
   const len = nums.length;
   let res = 0;
   const arr = new Array(len).fill(0).map((val, i) => i)
   arr.sort((a,b)=>nums[b]-nums[a])
   const max = [Number.MIN_VALUE]
   const maxP = [null]
   const vals = []
   for (let i = len - 1; i >= 0; i--){
     let val = 0;
     if (nums[i] > max[max.length - 1]) {
       val = len - i - 1
       max.push(nums[i])
       maxP.push(i)
     } else {
       let low = 1, high = max.length - 1;
       while (low <= high) {
         const mid = (low + high) >> 1
         if (max[mid] > nums[i]) {
           low = mid + 1
         } else {
           high = mid - 1
         }
       }
       if (low < maxP.length) {
         val = vals[len-maxP[low]-1]
       }
       const tMax = maxP[low]||len
       for (let j = i+1; j <= tMax; j++){
         if (nums[j] < nums[i]) {
           val++
         }
       }
     }
     res += val;
     vals.push(val)
   }
   return res
 };
console.log(reversePairs([4,5,6,7]))