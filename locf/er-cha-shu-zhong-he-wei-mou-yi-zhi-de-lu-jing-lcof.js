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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let ans = []
  if (!root && target === 0) {
    return ans
  }
  const val = root.val
  if (!root.left && !root.right && val === target) {
    return [[val]]
  }
  if (root.left) {
    ans = ans.concat(pathSum(root.left,target-val))
  }
  if (root.right) {
    ans = ans.concat(pathSum(root.right,target-val))
  }
  ans.forEach(a => {
    a.unshift(val)
  })
  return ans
};

console.log(pathSum({
  val: 1,
  left: {
    val: -2,
    left: {
      val: 1,
      left: {
        val: -1,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    },
  },
  right:{
    val: -3,
    left: {
      val: -2,
      left: null,
      right: null
    },
    right: null
  },
},-1))