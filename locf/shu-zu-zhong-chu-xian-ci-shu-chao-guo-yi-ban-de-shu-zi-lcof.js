/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let x = 0, v = 0
  for (let n of nums) {
    if (v === 0) {
      x = n
      v++
    } else if(x===n){
      v++
    } else {
      v--
    }
  }
  return x
};

console.log(majorityElement([1,2,3,2,2,2,5,4,2]))