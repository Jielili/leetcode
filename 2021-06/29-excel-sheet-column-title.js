/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = [];
  while (columnNumber > 0) {
    const a0 = (columnNumber - 1) % 2 + 1;
    // ans.push(String.fromCharCode(a0 - 1 + 'A'.charCodeAt()));
    ans.push(a0);
    columnNumber = Math.floor((columnNumber - a0) / 2);
  }
  ans.reverse();
  return ans.join('');
};

// console.log(convertToTitle(1))
// console.log(convertToTitle(12))
// console.log(convertToTitle(15))
// console.log(convertToTitle(31))
// console.log(convertToTitle(62))
// console.log(convertToTitle(78))
console.log(convertToTitle(1))
console.log(convertToTitle(2))
console.log(convertToTitle(3))
console.log(convertToTitle(4))
console.log(convertToTitle(5))