// 球会落到何处



/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// var findBall = function (grid) {
//   const ans = [], mLen = grid.length, nLen = grid[0].length
//   for (let i = 0; i < nLen; i++){
//     let dir = 'up', m = 0, n = i;
//     while (m >= 0 && m < mLen && n >= 0 && n < nLen) {
//       const k = grid[m][n]
//       if (dir === 'up') {
//         if (k === 1) {
//           dir = 'left'
//           n++
//         } else {
//           dir = 'right'
//           n--
//         }
//       } else if ((dir === 'left' && k === 1) ||(dir === 'right' && k === -1) ){
//         dir = 'up'
//         m++
//       } else {
//         break
//       }
//     }
//     if (m >= mLen) {
//       ans.push(n)
//     } else {
//       ans.push(-1)
//     }
//   }
//   return ans
// };

var findBall = function (grid) {
  const n = grid[0].length,ans = []
  for (let i = 0; i < n; i++){
    let col = i;
    for (let row of grid) {
      const dir = row[col]
      col += dir
      if (col < 0 || col >= n || row[col] !== dir) {
        col = -1;
        break;
      }
    }
    ans.push(col)
  }
  return ans
}

console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]))
console.log(findBall([[-1]]))
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]))