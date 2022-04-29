/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
};
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  return tree(grid, [0, 0], grid.length)
};

const tree = function (grid, position, width) {
  let value = grid[position[0]][position[1]]
  const node = new Node(value, true, null, null, null, null)
  const w = width / 2
  if (w >= 1) {
    const topLeftNode = tree(grid, position, w)
    const topRightNode = tree(grid, [position[0], position[1] + w], w)
    const bottomLeftNode = tree(grid, [position[0] + w, position[1]], w)
    const bottomRight = tree(grid, [position[0] + w, position[1] + w], w)
    if (!(topLeftNode.isLeaf && topRightNode.isLeaf && bottomLeftNode.isLeaf && bottomRight.isLeaf && topLeftNode.val === topRightNode.val && topLeftNode.val === bottomLeftNode.val && topLeftNode.val === bottomRight.val)) {
      node.topLeft = topLeftNode
      node.topRight = topRightNode
      node.bottomLeft = bottomLeftNode
      node.bottomRight = bottomRight
    } 
  } 
  return node
}

// const tree = function (grid, position, width) {
//   let value = grid[position[0]][position[1]]
//   const node = new Node(value, true, null, null, null, null)
//   for (let i = 0; i < width; i++) {
//       for (let j = 0; j < width; j++) {
//           if (grid[position[0] + i][position[1] + j] !== value) {
//               node.value = 1
//               node.isLeaf = false
//               const w = width / 2
//               node.topLeft = tree(grid, position, w)
//               node.topRight = tree(grid, [position[0], position[1] + w], w)
//               node.bottomLeft = tree(grid, [position[0] + w, position[1]], w)
//               node.bottomRight = tree(grid, [position[0] + w, position[1] + w], w)
//           }
//       }
//   }
//   return node
// }
console.log(construct([[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]))