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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let val = root.val
  const level = [root]
  while (level.length > 0) {
    const len = level.length
    for (let i = 0; i < len; i++){
      const node = level.shift()
      if (node.val !== val) {
        return false
      }
      if (node.left) {
        level.push(node.left)
      }
      if (node.right) {
        level.push(node.right)
      }
    }
  }
  return true
};