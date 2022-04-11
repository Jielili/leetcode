// 动态规划
//  圆圈中最后剩下的数字
// 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
// 求出这个圆圈里剩下的最后一个数字。

// 例如，0、1、2、3、4这5个数字组成一个圆圈，
// 从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

// 动态规划
// 删除的数字==删除的数组位置
// fn[n,m] 删除一个数字(m%n -1)后， 数组变为[m%n, m%n +1, m%n +2, m%n +3,...,0,1,2,3,m%n -2] 
// 变为 fn[n,m] 最后留下哪个位置的问题
// fn[1] = 0
// fn[2] = (m%2 + fn[1]) % 2
// fn[3] = (m%3 + fn[2]) % 3
// .....
// fn[n] = (m%n + fn[n]) % n
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let dp = 0;
  for (let i = 2; i <= n; i++){
    dp = (m%i + dp)%i
  }
  return dp
};

console.log(lastRemaining(5,3))
console.log(lastRemaining(10,17))