// 最小高度树

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const map = new Map()
  edges.forEach((i, j) => {
    if (map.has(i)) {
      map.get(i).push(j)
    } else {
      map.set(i,[j])
    }
    if (map.has(j)) {
      map.get(j).push(i)
    } else {
      map.set(j,[i])
    }
  })
};