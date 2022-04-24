// 868. 二进制间距
// 位运算
// 除以二  商：>> 1  余数： & 1


/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
   let right = 0, i = 1, res = 0
   while (n > 0) {
     const a = n & 1
     if (a) {
       res = Math.max(res, i - (right||i))
       right = i
     }
     i++
     n = n >> 1
   }
   return res
 };

console.log(binaryGap(22))
console.log(binaryGap(8))
console.log(binaryGap(5))