/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const arr = new Array(m).fill(1).map(item => (new Array(n).fill(1)))
  return dfs(arr, 0, 0, m, n, k)
};

const dfs = function (arr, i, j, m, n, k) {
  if (i < 0 || i >= m || j < 0 || j >= n || arr[i][j] == 0) {
    return 0
  }
  const a = String(i).split('').reduce((pre, cur) => pre + Number(cur), 0)
  const b = String(j).split('').reduce((pre, cur) => pre + Number(cur), 0)
  if (a + b > k) {
    arr[i][j] = 0
    return 0
  }
  arr[i][j] = 0
  const res = 1 + dfs(arr, i + 1, j, m, n, k) + dfs(arr, i - 1, j, m, n, k) + dfs(arr, i, j + 1, m, n, k) + dfs(arr, i, j - 1, m, n, k)
  // arr[i][j] = 1
  return res
}

console.log(movingCount(3,1,0))