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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (root) {
    if (root.val > high) {
      return rangeSumBST(root.left, low, high)
    }
    if (root.val < low) {
      return rangeSumBST(root.right, low, high)
    }
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
  }
  return 0

};

console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15))