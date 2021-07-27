/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  const curr = [root];
  let deep = 1;
  while (curr.length > 0) {
    const len = curr.length;
    for (let i = 0; i < length; i++) {
      const node = curr.shift();
      if (!node.left && !node.right) {
        return deep;
      }
      node.left && curr.push(node.left);
      node.right && curr.push(node.right);
    }
    deep++;
  }
  return deep;
};