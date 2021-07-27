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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  const res = [],
    curr = [root];
  while (curr.length > 0) {
    const len = curr.length;
    const currVals = [];
    for (let i = 0; i < len; i++) {
      const node = curr.shift();
      currVals.push(node.val);
      node.left && curr.push(node.left);
      node.right && curr.push(node.right);
    }
    res.unshift(currVals);
  }
  return res
};