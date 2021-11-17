/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
   const ans = []
   
   for (let i = 1; ; i++){
     if (String(i).length > n) {
       break
     }
     ans.push(i)
   }
   return ans
 };
console.log(printNumbers(3))