/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let flag = 0;
  const m = needle.length;
  const pi = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (needle[i] == needle[j]) {
      j++;
    }
    pi[i] = j;
  }
  for (let i = 0; i < n; i++) {
    flag = i;
    for (let j = 0; j < m; j++) {
      if (haystack[i] === needle[j]) {
        i++
        if (j === needle.length - 1) {
          return flag;
        }
      } else {
        if (j > 0) {
          i -= (pi[j-1] + 1)
          break
        }
        break
      }
    }
  }
  return m === 0 ? 0 : -1
};

console.log(strStr("mississippi",
"issip"))