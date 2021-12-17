//给定一个数字，我们按照如下方式给它翻译成字符串：0 翻译成 'a'，1翻译成'b'，25翻译成'z'。一个数字可能有不同中翻译方法。
//请编程实现一个函数，用来计算一个数字有多少种翻译方法。


//为什么很多种翻译方式呢，因为可以一位一位的去翻译；如果连着的数字在10到25中间，这也可以两位翻译成一个字母
//当 连着的2个数字可以翻译成一个字母时，第二个数字是否参与着本次翻译，会影响到接下来的翻译


//但是前1，2，3.。。。n-1个数字的翻译方法肯定是确定的。
//那我们在求前n个数字的翻译方法。是否可以由之前的结果算出来
//可以！我们把求这n个数字有多少种翻译方法记做f(n)


//如果x[n-1]，x[n] 可以翻译成一个字母，那么：
//1、可以把这两个数字组合翻译成一个数字，这种选择就看两个数字之前的那些数字有多少种翻译方法，即f(n-2)，
//2、可以只翻译x[n]这个数字，那这种选择只看0-n-1的那些数字有多少种翻译方法，即f(n-1)
//那这是把上面两种结果加起来，就是f(n)的结果；即f(n)=f(n-1)+f(n-2)
//如果x[n-1]，x[n] 不能翻译成一个字母，那x[n]就得孤独翻译了，那么就只有上面那个2那种选择了，即f(n)=f(n-1)


//那什么时候x[n-1],x[n]可以翻译成一个字母，
//回答是 当x[n - 1] * 10 + x[n]的值在[10, 25]区间时可以翻译成一个字母。
//（26以后的数字超出a-z26个字母的范围，小于10的数字如01，02，09，只能拆开翻译）


//那我们的n怎么取值， f(n)的结果涉及到f(n-1)和f(n-2)
//为了让我们在循环时，f(n) f(n-1)和f(n-2) 必须有意义，所以，n,n-1,n-2,都必须在 [0,len-1]区间
//取交集，n在 [2,len-1]区间
//f(0) = 1,f(1) = ????????好像越写越不对了。再思考下

/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
   let res = 0,s = ''+num
   if (s.length === 1) {
     return 1
   }

   res += translateNum(s.substring(1))
   const a = Number(s.substring(0, 2))
   if (s[0]!=='0' && a < 26 && s.length > 2 ) {
    res += translateNum(s.substring(2))
   } else if(s[0]!=='0' && a < 26){
     res ++
   }
   return res
 };


// 动态规划

// 
var translateNum = function (num) {
  let b = 1, a = 1;
  const word = '' + num;
  for (let i = 2; i <= word.length; i++){
    const n = Number(word.substring(i - 2, i))
    const c = n > 9 && n < 26 ? a + b : a
    b = a;
    a = c;
  }
  return a 
}


 console.log(translateNum(12258))