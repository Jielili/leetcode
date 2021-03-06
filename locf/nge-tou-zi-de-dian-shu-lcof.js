// 概率论
// n个骰子的点数
// 我做出来！！！ 找规律
// n个骰子，那数组和就在[n, n * 6] 区间中
// .....此处省略很多子，不想些了
// 你懂就好哈哈哈哈哈哈
// n个骰子的结果数组可以根据n-1个骰子的结果数组算出来
// n=1 [1,1,1,1,1,1]
// n=2  2,3,4,5,6,7,8,9,10,11,12
//     [1,1,1,1,1,1] -----------对应骰子-------([1,1],[1,2],[1,3],1,4],[]1,5],[1,6])
//   +   [1,1,1,1,1,1] -----------对应骰子-----------([2,1],[2,2],[2,3],[2,4],[2,5],[2,6])
//   +     [1,1,1,1,1,1]-----------对应骰子----------------([3,1],[3,2],[3,3],[3,4],[3,5],[3,6])
//   +       [1,1,1,1,1,1]-----------对应骰子--------------------([4,1],[4,2],[4,3],[4,4],[4,5],[4,6])
//   +         [1,1,1,1,1,1]-----------对应骰子------------------------([5,1],[5,2],[5,3],[5,4],[5,5],[5,6])
//   +           [1,1,1,1,1,1]-----------对应骰子----------------------------([6,1],[6,2],[6,3],[6,4],[6,5],[6,6])
//   = [1,2,3,4,5,6,5,4,3,2,1]
// n=3  3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
//   + [1,2,3,4,5,6,5, 4, 3, 2, 1]
//   +   [1,2,3,4,5,6, 5, 4, 3, 2, 1]
//   +     [1,2,3,4,5, 6, 5, 4, 3, 2, 1]
//   +       [1,2,3,4, 5, 6, 5, 4, 3, 2, 1]
//   +         [1,2,3, 4, 5, 6, 5, 4, 3, 2, 1]
//   +           [1,2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
//   = .........
//   ......
// end
/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  let res = [1, 1, 1, 1, 1, 1]
  for (let i = 2; i <= n; i++){
    const cur = new Array(5*i + 1).fill(0)
    for (let j = 0; j < 6; j++){
      for (let k = 0; k < res.length; k++){
        cur[j+k] += res[k]
      }
    }
    res = cur
  }
  const x = Math.pow(6,n)
  res = res.map(v => v / x)
  return res
};

// console.log(dicesProbability(1))
// console.log(dicesProbability(2))
console.log(dicesProbability(3))