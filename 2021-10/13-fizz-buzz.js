/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const ans = []
  for (let i = 0; i < n; i++){
    if ((i+1 )% 3 === 0) {
      ans.push('Fizz')
    }
    if ((i+1 )% 5 === 0) {
      ans[i] = (ans[i] ||'') + 'Buzz'
    }
    if (!ans[i]) {
      ans.push(String(i+1))
    }
  }
  return ans
};

console.log(fizzBuzz(15))