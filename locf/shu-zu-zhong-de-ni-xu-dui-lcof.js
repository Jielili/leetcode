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

 var reversePairs2 = function(nums) {
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

// 我觉得需要用hash
// 或者动态规划？ 不能是动态规划，根本推到不出来规律

// omg 是什么分治

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  const mergeSort = (start, end)=>{
    if (start >= end) {
      return 0
    }
    const mid = Math.floor((start + end) / 2)
    let res = mergeSort(start, mid) + mergeSort(mid + 1, end)
    const temp = nums.slice(start,end+1)
    let i = start, j = 0, k = mid-start+1
    while (i<=end) {
      if (j < k && temp[j] > temp[k]) {
        res += mid - start + 1 - j
        nums[i] = temp[k]
        k++
      } else if(j <= mid-start){
        nums[i] = temp[j]
        j++
      } else {
        nums[i] = temp[k]
        k++
      }
      i++
    }
    return res
  }
  return mergeSort(0,nums.length-1)
};


// console.log(reversePairs([7,5,6,4]))
// console.log(reversePairs([4,5,6,7]))
console.log(reversePairs([233,2001,234,2006,235,2003,236,2007,237,2002,2005,233,233,233,233,233,2004]))
console.log(reversePairs([1,3,2,3,1]))
