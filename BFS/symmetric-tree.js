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
var isSymmetric1 = function (root) {
  if (root === null) {
    return true;
  }
  const left = [root.left],
    right = [root.right];
  while (left.length > 0 && left.length === right.length) {
    const len = left.length;
    for (let i = 0; i < len; i++) {
      const leftNode = left.shift();
      const rightNode = right.pop();
      if (leftNode === null && rightNode === null) {
        continue;
      }
      if (leftNode === null || rightNode === null) {
        return false;
      }
      if (leftNode.val !== rightNode.val) {
        return false;
      }
      left.push(leftNode.left);
      left.push(leftNode.right);

      right.unshift(rightNode.right);
      right.unshift(rightNode.left);
    }
  }
  if (left.length === 0 && right.length === 0) {
    return true;
  } else {
    return false;
  }
};


var isSymmetric = function (root) {

  const check = (p, q) => {
    if (!q && !p) return true;
    if (!q || !p) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  }
  if (root === null) {
    return true;
  }
  return check(root.left, root.right);


};