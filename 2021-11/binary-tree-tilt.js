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
var findTilt = function (root) {
   return test(root)[1]
};

const test = function (root) {
  if (root === null) {
    return [0,0]
  }
  const left = test(root.left)
  const right = test(root.right)
  return [root.val+left[0]+right[0], Math.abs(left[0]-right[0]) + left[1] + right[1]]
}