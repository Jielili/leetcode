/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const arr = new Array(heights.length).fill(0).map(v => new Array(heights[0].length).fill(0).map(()=>[]))
  const res = []
  for (let i = 0; i < heights.length; i++){
    dfs(heights, arr, i, 0, 1)
    dfs(heights, arr, i, heights[0].length-1, 2)
  }
  for (let i = 0; i < heights[0].length; i++){
    dfs(heights, arr, 0, i, 1)
    dfs(heights, arr, heights.length-1, i, 2)
  }
  arr.forEach((a,i) => {
    a.forEach((v, j) => {
      if (v.length === 2) {
        res.push([i,j])
      }
    })
  })
  return res
};

const dfs = function (heights, arr,i,j, flag) {
  if (!arr[i][j].includes(flag)) {
    (arr[i][j]).push(flag)
  } else {
    return 
  }
  if (i - 1>=0 && heights[i - 1][j] >= heights[i][j]) {
    dfs(heights, arr, i- 1, j, flag)
  } 
  if (j + 1<heights[i].length && heights[i][j + 1] >= heights[i][j]) {
    dfs(heights,arr, i,j+1,flag)
  }
  if (i + 1<heights.length && heights[i + 1][j] >= heights[i][j]) {
    dfs(heights, arr, i+1, j, flag)
  } 
  if (j - 1>=0 && heights[i][j - 1] >= heights[i][j]) {
    dfs(heights,arr, i,j-1,flag)
  }
}

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))
console.log(pacificAtlantic([[2, 1], [1, 2]]))
console.log(pacificAtlantic([[9, 10, 14, 9, 2, 6, 16], [0, 0, 4, 5, 16, 16, 15]]))
