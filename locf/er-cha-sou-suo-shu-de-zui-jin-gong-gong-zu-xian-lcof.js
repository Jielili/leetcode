// 二叉搜索树的最近公共祖先
// 二叉搜索树啊，利用这个特性就好了
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
var lowestCommonAncestor = function (root, p, q) {
  if (p > q) {
    [p,q] = [q,p]
  }
  while (!(root.val <= q.val && root.val >= p.val)) {
    if (root.val <= q.val && root.val <= p.val) {
      root = root.right
    } else {
      root = root.left
    }
  }
  return root
};

console.log(lowestCommonAncestor({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: null
}, {val:2,left: null,right: null}, {val:1,left: null,right: null}))