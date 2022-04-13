// 数组中数字出现的次数
// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字
// 这题竟然是二进制的应用
// 这是我万万没有想到的
// 如果一个数出现三次，那么它的二进制位数字相加，都会是三
// 如果只有一个数出现1次，剩下的数都出现3次，那出现三次的那些数的二进制位相加都可以被三整除
// 把所有数的二进制位相加，能被三整除的那位应该属于出现三次数的二进制位
// 不能被三整除的就是只出现一次的数的二进制位
// 最后在把那些只出现一次的数的二进制位组合成一个数，即结果
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const a = new Array(31).fill(0)
  nums.forEach(num => {
    let i = 0
    while (num !== 0) {
      const v = num & 1
      a[31 - i - 1] += v
      num = num >> 1
      i++
    }
  })
  for (let i = 0; i < a.length; i++){
    a[i] %= 3
  }
  let res = 0;
  a.forEach(v => {
    res = res*2 +v
  })
  return res
};
console.log(singleNumber([3,4,3,3]))
console.log(singleNumber([9,1,7,9,7,9,7]))