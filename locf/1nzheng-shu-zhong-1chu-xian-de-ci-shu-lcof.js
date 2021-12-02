                                            /**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let d = 1,res = 0
  while (n >= d * 10) {
    res = res * 10 + d
    d *= 10
  }
  if (d === 1) {
    res++;
    return res;
  }
  const pre = res
  let a = Math.floor(n / d)
  let b = n % d
  if (a == 1) {
    res += b+1
  } else if(a>1){
    res += d
    res += (a-1)*pre
  }
  
  if (b > 0) {
    res += countDigitOne(b)
  }

  return res
};

// 10，100，1000，10000，100000
//  1， 20， 300， 4000， 50000

console.log(countDigitOne(0))
console.log(countDigitOne(1))
console.log(countDigitOne(4))
console.log(countDigitOne(9))
console.log(countDigitOne(10))
console.log(countDigitOne(12))
console.log(countDigitOne(23))
console.log(countDigitOne(99))
console.log(countDigitOne(100))
console.log(countDigitOne(101))