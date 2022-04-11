// 二叉树的最近公共祖先
// 递归
// 果然二叉树就得用递归
// 但是怎么能想到这种递归的啊，这还简单题？


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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) {
      return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // return left || right
  if (!left) return right;
  if (!right) return left;
  return root
};