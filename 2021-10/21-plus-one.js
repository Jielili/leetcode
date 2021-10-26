/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let num = 1;
  const len = digits.length
  for (let i = len - 1; i >= 0; i--){
    if (num === 0) {
      break
    }
    if (digits[i] === 9) {
      digits[i]=0
    } else {
      digits[i]++
      num=0
    }
  }
  if (num === 1) {
    digits.unshift(1)
  }
  return digits
};

console.log(plusOne([9]))