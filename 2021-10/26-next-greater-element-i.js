/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums1.length; i++){
    res.push(-1)
    const a = nums1[i]
    let j = nums2.indexOf(a) + 1
    while (j < nums2.length) {
      if (nums2[j] > a) {
        res[i] = nums2[j]
        break;
      } else {
        j++
      }
    }

  }

  return res
};

console.log(nextGreaterElement([2,4], [1,2,3,4]))