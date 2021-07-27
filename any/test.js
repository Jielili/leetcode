const str = "<p><a href='https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-look-ahead' class='jump' target='_blank'>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-look-ahead</a></p>";
const str1 ="<p>为什么要发长贴</p>"
const str2 ="<p></p>"
const reg = /<(\/)?[^\/a][^<>]*>/g

console.log(str.match(reg))
console.log(str1.match(reg))
console.log(str2.match(reg))