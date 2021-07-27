/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  nums2.forEach(val => {
    let low = 0,
      high = nums1.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (nums1[mid] < val) {
        low = mid + 1;
      } else if (nums1[mid] > val) {
        high = mid - 1;
      } else {
        low = mid;
        high = mid;
        break;
      }
    }
    if (high >= 0) {
      nums1.splice(high + 1, 0, val)
    } else {
      nums1.unshift(val)
    }
  })
  console.log(nums1)

  const len = nums1.length;
  const mid = Math.floor(len / 2)
  if (len % 2 === 0) {
    return (nums1[mid-1] + nums1[mid]) / 2
  } else {
    return nums1[mid]
  }
};

console.log(findMedianSortedArrays([1,2],[3,4]))