/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // let ans = '1'
  let arr = ['1']
  for (let i = 2; i <= n; i++){
    // const arr = ans.split('')
    let l = '', num = 0;
    for (let i = 0; i < arr.length + 1;i++){
      if (l !== arr[i]) {
        if (l !== '') {
          arr.splice(i - num, num, '' + num, l)
          i-=(num-2)
        }
        l = arr[i]
        num = 1;
      } else {
        num++;
      }
    }
  }
  return arr.join('')
};

console.log(countAndSay(6))