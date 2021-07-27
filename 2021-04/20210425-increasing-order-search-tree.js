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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  if (root) {
    let up = null;
    if (root.left) {
      up = increasingBST(root.left)
    }
    if (root.right) {
      root.right = increasingBST(root.right);
    }
    root.left = null;
    if (up) {
      let p = up;
      while (p.right) {
        p = p.right;
      }
      p.right = root;
      return up;
    } else {
      return root;
    }

  } else {
    return null;
  }
};



console.log(increasingBST({
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}))