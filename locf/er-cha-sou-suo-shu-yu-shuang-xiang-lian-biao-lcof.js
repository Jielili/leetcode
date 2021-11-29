/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  let pre, head;
  const dfs = function (root) {
    if (!root) {
      return 
    }
    dfs(root.left)
    if (pre) {
      pre.right = root
    } else {
      head = root
    }
    root.left = pre
    // root.right = pre
    pre = root
    dfs(root.right)
  }
  dfs(root, pre, head)
  head.left = pre
  pre.right = head
  // if (a.length > 0) {
  //   [a[0].left,a[a.length - 1].right] = [a[a.length - 1],a[0]]
  // }
  return head
};

// const mid = function (root) {
//   let ans = []
//   if (root) {
//     if (root.left) {
//       ans = ans.concat(mid(root.left))
//     }
//     if (ans.length) {
//       root.left = ans[ans.length - 1]
//       ans[ans.length-1].right = root
//     }
//     ans.push(root)
//     if (root.right) {
//       const right = mid(root.right)
//       right[0].left = root
//       root.right = right[0]
//       ans = ans.concat(right)
//     }
//   }
//   return ans
// }



console.log(treeToDoublyList({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}))