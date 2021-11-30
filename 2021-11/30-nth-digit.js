/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let d = 1, count = 9;
    while (n > d * count) {
        n -= d * count;
        d++;
        count *= 10;
    }
  const len = Math.ceil(n / d) -1 
  const i = (n-1)%d
  const num = Math.pow(10,d-1) +len
  return ('' +num)[i]
};

console.log(findNthDigit(50))