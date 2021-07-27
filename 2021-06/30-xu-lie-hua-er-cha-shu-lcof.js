/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = [];
  const currLevel = [root];
  while (currLevel.length > 0) {
    const len = currLevel.length;
    for (let i = 0; i < len; i++) {
      const node = currLevel.shift();
      if (node) {
        res.push(node.val);
        currLevel.push(node.left);
        currLevel.push(node.right);
      } else {
        res.push(null)
      }
    }
  }
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.split(',');
  const rootVal = nodes.shift();
  if (rootVal === '') {
    return null;
  }
  const root = new TreeNode(rootVal);
  const currLevel = [root];
  while (currLevel.length > 0) {
    const len = currLevel.length;
    for (let i = 0; i < len; i++) {
      const node = currLevel.shift();
      const leftVal = nodes.shift();
      const rightVal = nodes.shift();
      if (leftVal !== '') {
        node.left = new TreeNode(leftVal);
        currLevel.push(node.left);
      }
      if (rightVal !== '') {
        node.right = new TreeNode(rightVal);
        currLevel.push(node.right);
      }
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


const data = serialize({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    }
  }
})

console.log(data);

console.log(deserialize(data));