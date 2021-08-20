/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length
  const arr = s.split('')
  for (let i = 0; 2 * k * i < len; i++){

    let start = 2 * k * i, end = 2 * k * i + k - 1
    end = end<len?end:len
    while (start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++;
      end--;
    }
  }
  return arr.join('')
};

console.log(reverseStr("abcd",2))