// 48-57
/**
 * @param {string} str
 * @return {number}
 */
// var strToInt = function (str) {
//   let res = 0; let negative = false, decimal=0;
//   const number0Ascii = '0'.charCodeAt()
//   str = str.trim()
//   if (str[0] === '-' || str[0] === '+') {
//     if (str[0] === '-') {
//       negative = true
//     }
//     str = str.substring(1)
//   }
//   for (let i = 0; i < str.length; i++){
//     const cur = str.charCodeAt(i) - number0Ascii
//     if ((cur < 0 || cur > 9) && (decimal!==0 || cur!==-2)) {
//       break
//     }
//     if (decimal > 0) {
//       decimal *=10
//     }
//     if (cur === -2) {
//       decimal = 1
//     } else {
//       res = res * 10 + cur
//     }
//   }
//   if (decimal) {
//     res = res/decimal
//   }
//   res = res * (negative?-1:1)
//   if (res > 2147483647) {
//     return 2147483647
//   } else if (res < -2147483648) {
//     return -214748364
//   }
//   return res
// };

var strToInt = function (str) {
  let res = 0; let negative = false;
  const number0Ascii = '0'.charCodeAt(), max = Math.pow(2,31)-1,min = -Math.pow(2,31)
  str = str.trim()
  if (str[0] === '-' || str[0] === '+') {
    if (str[0] === '-') {
      negative = true
    }
    str = str.substring(1)
  }
  for (let i = 0; i < str.length; i++){
    const cur = str.charCodeAt(i) - number0Ascii
    if (cur < 0 || cur > 9) {
      break
    }
    res = res * 10 + cur
  }
  res = res * (negative?-1:1)
  if (res > Number.max) {
    return Number.max
  } else if (res < Number.min) {
    return Number.min
  }
  return res
};

console.log(strToInt('42'))
console.log(strToInt('   -42'))
console.log(strToInt('4193 with words'))
console.log(strToInt('words and 987'))
console.log(strToInt('01234'))
console.log(strToInt('4.234'))