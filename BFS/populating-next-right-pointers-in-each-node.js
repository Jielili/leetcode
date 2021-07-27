/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }
  const curr = [root];
  while (curr.length > 0) {
    const len = curr.length;
    for (let i = 0; i < len; i++) {
      const node = curr.shift();
      node.next = i < len - 1 ? curr[0] : null;
      node.left && curr.push(node.left)
      node.right && curr.push(node.right)
    }
  }
  return root;
};