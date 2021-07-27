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
var findSecondMinimumValue = function (root) {
  return [...new Set(findLeaf(root).sort((a, b) => a - b))][1] || -1
};

var findLeaf = function (root) {
  if (root.left === null) {
      return [root.val];
  }
  const l = findLeaf(root.left);
  const r = findLeaf(root.right)

  const x = [...l, ...r]
  return x;
}