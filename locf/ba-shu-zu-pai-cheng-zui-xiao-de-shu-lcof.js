// 把数组排成最小的数
// 输入一个非负数数组，把数组里所有数字拼接起来排成一个数
// 打印能拼接出的所有数字中最小的一个

// 谁能想到是 两个字符串互换位置加和的比较啊？！！！！
// 顺便说一下js数组里的sort吧


// sort接收一个函数参数f(a,b)[number]
// 参数a,b是进行比较的元素，返回值是一个数字
// 如果返回的数字小于0，那么，a排在b前面
// 如果返回的数字大于0，那么，b排在a前面
// 如果返回数字等于0，a,b的相对位置不变

// 如果没有传这个比较函数，那，sort会把元素的值转换为字符串。
// 然后根据字符串的诸个字符的Unicode码点进行比较排序
// 如果，a的unicode码点小于b的码点，那a排在b前面
// 如果，a的码点大于b的码点，那b排在a前面
// 如果，a的码点等于b的码点，那a与b的相对位置不变


// 我们比较数字的时候会有，if(a<b) 返回true或者false
// 还有 if(a-b) a-b可能是 小于0，大于0，等于0；数字转换为boolean，时，0转为false，非0转换为1

// 那么a和b的码点是怎么比较的呢？
// 首先比较a的第一个字符和b的第一个字符，如果如果不等，则返回比较结果
// 否则比较a的第二个字符和b的第二个字符，如果不等，则返回比较结果
// 否则比较第三个字符....
// 比较完a和b的所有字符，都想都，则返回相等


// v8 中实现 sort() 方法时，采用了 ”插入排序“ 和 ”快速排序“ 两种排序方式。
// 对于短数组（长度 <= 22）来说，插入排序效率更高。
// 如果没有传入 comparefn ，则生成一个 comparefn 比较函数。
// 在自动生成的比较函数中，会将传入的数组元素通过 TO_STRING 方法转换为字符串，再行比较。


/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  // nums.sort()
  nums.sort((a, b) => {
    const a1 = String(a)
    const b1 = String(b)
    if(a1+b1 < b1+a1){
      return -1
    }else if( a1+b1 > b1+a1){
      return 1
    }else {
      return 0
    }
  })
  console.log(nums)
  return nums.join('')
};

// console.log(minNumber([9051,5526,2264,5041,1630,5906,6787,8382,4662,4532,6804,4710,4542,2116,7219,8701,8308,957,8775,4822,396,8995,8597,2304,8902,830,8591,5828,9642,7100,3976,5565,5490,1613,5731,8052,8985,2623,6325,3723,5224,8274,4787,6310,3393,78,3288,7584,7440,5752,351,4555,7265,9959,3866,9854,2709,5817,7272,43,1014,7527,3946,4289,1272,5213,710,1603,2436,8823,5228,2581,771,3700,2109,5638,3402,3910,871,5441,6861,9556,1089,4088,2788,9632,6822,6145,5137,236,683,2869,9525,8161,8374,2439,6028,7813,6406,7519]))

var test = function (nums) {

  console.log([...nums].sort())
  nums.sort((a, b) => {
    const x = String(a),y = String(b)
    if (x < y) {
      return -1
    } else if (x > y) {
      return 1
    } else {
      return 0
    }
  })
  console.log(nums)
}

test([1, 30, 4, 21, 100000])