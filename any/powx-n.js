/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//   let res = 1,
//     neg = false;
//   if (n < 0) {
//     n = -n;
//     neg = true;
//   }
//   while (n > 0) {
//     if (n % 2 === 1) {
//       res *= x;
//     }
//     x = x * x;
//     n = Math.floor(n / 2)
//   }
//   return neg ? (1 / res) : res
// };

// console.log(myPow(2, -2))


var test = function () {
  // const pairs = [[1,219],[2,228],[19,225],[46,211],[48,188],[56,187],[67,163],[84,0]];
  // const timestamp = 84;
  // if (pairs) {
  //   let low = 0,
  //     high = pairs.length - 1;
  //   while (low <= high) {
  //     let mid = Math.floor((high - low) / 2) + low;
  //     if (pairs[mid][0] > timestamp) {
  //       high = mid - 1;
  //     } else if (pairs[mid][0] < timestamp) {
  //       low = mid + 1;
  //     } else {
  //       return mid;
  //     }
  //   }
  //   if (high >= 0) {
  //     return high;
  //   }
  //   return 0;
  // }
  // return 0;
  const res = [[1,219],[2,228],[19,225],[46,211],[48,188],[56,187],[67,163],[84,0]];
  const target = 84;
  let low = 0,
      high = res.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      if (res[mid][0] < target) {
        low = mid + 1;
      } else if (res[mid][0] > target) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return high
}

console.log(test())