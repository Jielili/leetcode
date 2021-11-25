/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = []
  const level = []
  root && level.push(root)
  while (level.length) {
    const len = level.length
    const a = []
    for (let i = 0; i < len; i++){
      const node = level.shift()
      if (node) {
        a.push(node.val)
        node.left && level.push(node.left)
        node.right && level.push(node.right)
      }
    }
    ans.push(a)
  }
  return ans
};