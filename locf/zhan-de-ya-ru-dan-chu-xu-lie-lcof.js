/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const a = []
  // while (pushed.length > 0 || a.length > 0) {
  //   if (a[a.length - 1] === popped[0]) {
  //     a.pop()
  //     popped.shift()
  //   } else if(pushed[0] === popped[0]) {
  //     pushed.shift()
  //     popped.shift()
  //   } else if(pushed.length > 0){
  //     a.push(pushed.shift())
  //   } else {
  //   return false
  // }
  // }
  // return true
  while (pushed.length > 0) {
    a.push(pushed.shift())
    while (a.length && a[a.length - 1] === popped[0]) {
      a.pop()
      popped.shift()
    }
  }
  if (popped.length) {
    return false
  } else {
    return true
  }
};
console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]))