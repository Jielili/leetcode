/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function (trees) {
  let top = [0, Number.NEGATIVE_INFINITY]
  trees.forEach(a => {
    if (a[1] > top[1]) {
      top = a
    }
  })
  const res = [top]
  trees.splice(trees.indexOf(top), 1)
  
  
};