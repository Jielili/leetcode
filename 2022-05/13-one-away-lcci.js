/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (Math.abs(first.length - second.length) > 1) {
     return false
  }
  if (first.length > second.length) {
    [first, second] = [second, first]
  }
  if (second.length > first.length) {
    let hasRemove = false
    for (let i = 0; i < second.length; i++){
      if (second[i] !== first[i]) {
        if (!hasRemove) {
          second = second.substring(0, i) + second.substring(i + 1)
          i--
          hasRemove = true
        } else {
          return false
        }
      }
    }
  }
  let hasHaved = false
  for (let i = 0; i < second.length; i++){
    if (second[i] !== first[i]) {
      if (!hasHaved) {
        hasHaved = true
      } else {
        return false
      }
    } 
  }
  return true
};

console.log(oneEditAway("a", "a"))
console.log(oneEditAway("teacher",
"bleacher"))