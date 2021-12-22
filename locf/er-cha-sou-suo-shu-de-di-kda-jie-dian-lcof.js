//  二叉搜索数的第K大的节点
//  二叉搜索数的右子树的数都比父节点值大，左子树的数逗比父节点值小
//  左子树右子树也符合上个标准
//  中序遍历（深度优先遍历）
//  没遍历一个值k就减1（k===1的时候返回当前遍历值）

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
   let res = undefined
  const getA = function (root) {
    if(res) return
      if (root.right) {
          getA(root.right)
      }
      if (k === 1) {
          res = root.val
      }
      k--
      if (root.left) {
          getA(root.left)
      }
  }
  return res
};
