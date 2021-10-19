/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const len = num.toString(2).length
  return num ^ Math.pow(2,len)-1
};

console.log(findComplement(20161211))



