/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric1 = function (root) {
  const arr = [root]
  let vals = []
  while (arr.length > 0) {
    const len = arr.length
    vals = []
    for (let i = 0; i < len; i++) {
      const node = arr.shift()
      vals.push(node?.val)
      if (node) {
        arr.push(node.left)
        arr.push(node.right)
      }
    }
    let i = 0, j = vals.length - 1
    while (i < j) {
      if (vals[i] !== vals[j]) {
        return false
      }
      i++;
      j--;
    }
  }
  return true
};

var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return compare(root.left,root.right)
};

const compare = function (a, b) {
  if (!a && !b) {
    return true
  }
  if (!a || !b) {
    return false
  }
  return a.val === b.val && compare(a.left,b.right) && compare(a.right,b.left)
}
