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
var sumRootToLeaf = function (root) {
  return getValue(0, root)
};

const getValue = function (pre, root) {
  const cur = pre * 2 + root.val
  if (!root.left && !root.right) {
    return cur
  } else {
    return (root.left? getValue(cur, root.left) : 0) + (root.right ? getValue(cur, root.right) : 0)
  }
}

console.log(sumRootToLeaf({
  val: 0,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: null
}))