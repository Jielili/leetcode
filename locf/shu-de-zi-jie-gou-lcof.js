/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false
  }
  return compare(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)
};

const compare = function (a, b) {
  if (!a || !b) {
    return false
  }
  return a.val === b.val && ((!b.left || compare(a.left,b.left)) && (!b.right || compare(a.right,b.right)))
}
