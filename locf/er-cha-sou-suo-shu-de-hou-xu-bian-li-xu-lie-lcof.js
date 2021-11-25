/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (postorder.length === 0) {
     return true
  }
  const a = postorder.pop(), left = []
  while (postorder.length > 0) {
    if (postorder[0] < a) {
      left.push(postorder.shift())
    } else {
      break
    }
  }
  for (let i = 0; i < postorder.length; i++){
    if (postorder[i] < a) {
      return false
    }
  }
  return verifyPostorder(left) && verifyPostorder(postorder)
};
console.log(verifyPostorder([1,3,2,6,5]))