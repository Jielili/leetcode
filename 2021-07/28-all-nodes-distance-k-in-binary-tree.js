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
var distanceK = function (root, target, k) {
  link(root);
  dfs(target);

};

let link = function (root) {
  if (root.left) {
    root.left.parent = root;
    link(root.left)
  }
  if (root.right) {
    root.right.parent = root;
    link(root.right)
  } 
}

let dfs = function (target, k) {
  const res = [];
  if (target.visited) {
    return res;
  }
  if (k > 0) {
    if (target.parent && !target.parent.visited) {
      res = [...res,...dfs(target.parent, k - 1)]
    }
    if (target.left && !target.left.visited) {
      res = [...res,...dfs(target.left, k - 1)]
    }
    if (target.right && !target.right.visited) {
      res = [...res,...dfs(target.right, k - 1)]
    }
  }
  if (k === 0) {
    target.visited = true;
    res.puah(target.val)
  }
  return res;
}