/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = []
  if (!root) {
    return ''
  }
  if (root.left) {
    res.push(serialize(root.left))
  }
  if (root.right) {
    res.push(serialize(root.right))
  }
  res.push(root.val)
  return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) {
    return null
  }
  const arr = data.split(',')
  const val = Number(arr.splice(arr.length - 1,1)[0])
  const root = new TreeNode()
  root.val = val
  let m = 0;
  while (m < arr.length && Number(arr[m]) < val) {
    m++
  }
  root.left = deserialize((arr.splice(0, m)).join(','))
  root.right = deserialize(arr.join(','))
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const a = new TreeNode(2)
a.left = new TreeNode(1)
a.right = new TreeNode(3)


console.log(deserialize(serialize(a)))