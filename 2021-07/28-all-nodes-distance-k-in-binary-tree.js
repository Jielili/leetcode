/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  let targetLevel = 0;
  const level = [];
  const cur = [root];
  while (cur.length > 0) {
    const len = cur.length;
    level.push([...cur])
    for (let i = 0; i < len; i++){
      const node = cur.shift();
      if (node === target) {
        targetLevel = cur.length;
      }
      node.left && cur.push(node.left);
      node.right && cur.push(node.right);
    }
  }
  const res = [], upLevel = Math.abs(targetLevel - k), downLevel = targetLevel + k;

  if (upLevel < level.length) {
    for (let node of level[upLevel]) {
      if (node !== target) {
        res.push(node.val)
      }
    }
  }

  if (downLevel < level.length) {
    for (let node of level[downLevel]) {
      if (node !== target) {
        res.push(node.val)
      }
    }
  }

  return res;

};