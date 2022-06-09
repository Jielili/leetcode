/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  const r = dfs(root)
  const i = r.indexOf(p)
  return r[i+1]
};

const dfs = function (root) {
  let res = []
  if (root.left) {
    res = root.left
  }
  res.push(root)
  if (root.right) {
    res = [...res,inorderSuccessor(root.right)]
  }
  return res
}