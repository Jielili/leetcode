/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function (target, arr) {
    // const reg = new RegExp('\b'+target.join('\b|\b')+'\b', 'g')
    // let req = (((arr.join(' ')).match(reg))||[]).map(item => target.indexOf(Number(item)));
    let req = [];
    for (let item of arr) {
        const i = target.indexOf(item);
        if (i >= 0) {
            req.push(i)
        }
    }
    // for (let i = 1; i < req.length;){
    //     if (req[i] === req[i - 1]) {
    //         req.splice(i, 1)
    //         continue;
    //     }
    //     i++
    // }
    // const len = req.length, targetLen = target.length;
    // if (len === 0) {
    //     return targetLen;
    // }
    // const x = [...new Set(req)].sort((a, b) => a - b)
    // const xLen = x.length
    // x.push(x[xLen-1] +1)
    
    // const dp = new Array(xLen + 1).fill(0)
    
    // for (let i = 1; i < len + 1; i++){
    //     const cur = req[i - 1]
    //     const t = x.indexOf(cur);
    //     for (let j = xLen; j > 0; j--){
    //         if (x[j] > cur) {
    //             dp[j] = Math.max(1+dp[t],dp[j])
    //         }
    //     }
    // }



    // return targetLen - dp[xLen]
    
    return target.length - test(req);
    
};

var test = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    const dp = new Array(nums.length).fill(0);
    dp[0] = 1;
    let maxans = 1;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
}

console.log(minOperations([6,4,8,1,3,2],
     [4,7,6,2,3,8,6,1]))