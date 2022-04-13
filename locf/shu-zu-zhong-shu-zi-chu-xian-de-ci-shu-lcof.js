/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  const res = [];
  for (let v of nums) {
    if (res.includes(v)) {
      res.splice(res.indexOf(v),1)
    } else {
      res.push(v)
    }
  }
  return res
};
console.log(singleNumbers([1,2,10,4,1,4,3,3]))