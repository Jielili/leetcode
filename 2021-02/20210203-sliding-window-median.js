/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const ans = [],leftMax = nums.length - k
    const arr =nums.slice(0,k).sort((a,b)=>a-b)
    let left = 0

    if ((k & 1) == 0) {
        while (left <= leftMax) {
            const p = Math.floor(k/2)
            ans.push((arr[p]+arr[p-1])/2)
            // const arr = nums.slice(left,left+k).sort((a,b)=>a-b)
            
            arr.splice(arr.indexOf(nums[left]),1)
            for(let i = 0;i<=k;i++){
                if(i==k||arr[i]>nums[left+k]){
                    arr.splice(i,0,nums[left+k])
                    break
                }
            }
            left++
        }
    } else {
        while (left <= leftMax) {
            // const arr = nums.slice(left,left+k).sort((a,b)=>a-b)
            const p = Math.floor(k/2)
            ans.push(arr[p])
            arr.splice(arr.indexOf(nums[left]),1)
            for(let i = 0;i<=k;i++){
                if(i==k||arr[i]>nums[left+k]){
                    arr.splice(i,0,nums[left+k])
                    break
                }
            }
            left++
        }
    }

    return ans
};

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7],3))