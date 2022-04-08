// 剑指 Offer 58 - I. 翻转单词顺序
// 正则表达式 
// + 匹配前一个表达式1次或者多次 相当于{1,}
// * 匹配前一个表达式0次或者多次 相当于{0,}
// ? 匹配前一个表达式0次或者1次 相当于{0,1}

// {n} 前一个表达式正好出现n次
// {n,} 前一个表达式至少出现n次
// {n,m} 前一个表达式至少出现n次，至多出现m次
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return  s.trim().split(/\s+/).reverse().join(' ')
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world!  "))
console.log(reverseWords("a good   example"))