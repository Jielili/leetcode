/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function (root) {
  if (!root) {
    return 0
  }
  let deep = 0;
  const level = [root]
  while (level.length > 0) {
    const len = level.length;
    for (let i = 0; i < len; i++){
      const node = level.shift();
      if (node.left) {
        level.push(node.left)
      }
      if (node.right) {
        level.push(node.right)
      }
    }
    deep ++
  }
  return deep
};

var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(depth.left),maxDepth(depth.right)) +1
};