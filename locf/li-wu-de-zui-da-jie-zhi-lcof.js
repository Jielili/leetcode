// 最大价值礼物
// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
// 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
// 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？


// 初看题目，我觉得这是一道深度/广度优先探索问题
// 只能往右走，或者往下走
// 遍历每个方格，每个格的新值是，左格和上格的最大值 加上 本值

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const m = grid.length,n = grid[0].length
  for (let i = 0; i < m; i++){
    for (let j = 0; j < n; j++){
      let a = 0
      if (i > 0) {
        a = Math.max(a,grid[i-1][j])
      }
      if (j > 0) {
        a = Math.max(a,grid[i][j-1])
      }
      grid[i][j] += a
    }
  }
  return grid[m-1][n-1]
};

// 好吧，最后写出来好像是动归

console.log(maxValue([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))