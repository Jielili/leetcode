/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let d= 1,count = 9
  while (n > count * d) {
    n -= count * d
    count *=10
    d++
  }
  const diff = Math.floor((n - 1)/ d) 
  const i = (n - 1) % d
  return String(Math.pow(10,d-1)+diff)[i]
}; 
console.log(findNthDigit(15))