/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const len = grid.length,colMax = new Array(len).fill(0),rowMax = new Array(len).fill(0)
  for (let i = 0; i < len; i++){
    for (let j = 0; j < len; j++){
      colMax[j] = Math.max(colMax[j], grid[i][j])
      rowMax[i] = Math.max(rowMax[i], grid[i][j])
      // colMax[j] = Math.max(colMax[i], grid[i][j])
    }
  }
  let res = 0;
  for (let i = 0; i < len; i++){
    for (let j = 0; j < len; j++){
      res += Math.min(colMax[i],rowMax[j]) - grid[i][j]
    }
  }
  return res
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))