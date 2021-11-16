/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const mod = 1000000007n
  if (n <= 3) {
    return n - 1
  } else {
    const b = n % 3
    const a = Math.floor(n / 3)
    if (b === 0) {
      return myPow(3n,a)
    } else if (b ===1){
      return myPow(3n,a-1) * 4n % mod
    } else {
      return myPow(3n,a) * 2n % mod
    }
  }
};

const myPow = function (a, b) {
  const mod = 1000000007n
  let res = 1n;
  while (b > 0) {
    if (b & 1) {
      res = (res * a) % mod
    }
    a = (a*a) % mod
    b >>= 1
  }
  return res
}