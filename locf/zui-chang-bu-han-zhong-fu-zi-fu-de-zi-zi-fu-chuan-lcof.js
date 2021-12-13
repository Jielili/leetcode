// 最长不含重复字符的子字符串

// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该字符串的的长度
// 我觉得应该是双指针，滑动窗口？感觉好像滑不起来啊


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 应该是双指针吧，先定义两个变量
  let res = 0, i = 0, j = 0;
  const n = s.length;
  while (i < n && j < n) {
    // const diff = s.charCodeAt(j) - 'a'.charCodeAt()
    if (s.indexOf(s[j],i)<j) {
    // if (compare.indexOf(s[j])>=0) {
      res = Math.max(res, j - i)
      // while (i < n) {
      //   const d = s.charCodeAt(i) - 'a'.charCodeAt()
      //   compare ^= (1 << d)
      //   i++
      //   if (d === diff) {
      //     break;
      //   }
      // }
      i = s.indexOf(s[j],i)+1
      // compare = compare.substring(compare.indexOf(s[j])+1)
    } 
    // compare |= 1<<diff
    // compare += s[j]
    j++
  }
  res = Math.max(res,j-i)
  return res
};

console.log(lengthOfLongestSubstring("aabaab!bb"))