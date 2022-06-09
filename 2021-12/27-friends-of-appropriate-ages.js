/**
 * @param {number[]} ages
 * @return {number}
 */
 var numFriendRequests = function(ages) {
  ages.sort((a, b) => a - b)
  let res = 0;
  let x = ages.length - 1, y = ages.length - 2
  while (x >= 0 && y >= -1) {
    if (x === y) {
      y--
      continue
    }
    let d = x + 1
      while (ages[x] === ages[d]) {
        d++
        res++
      }
    if (y >= 0 && ages[y] > 0.5 * ages[x] + 7) {
      y--
    } else {
      res+=x-y-1
      x--
    }
  }
  return res;
 };
// console.log(numFriendRequests([54,23,102,90,40,74,112,74,76,21]))
// console.log(numFriendRequests([16,16]))
console.log(numFriendRequests([73,106,39,6,26,15,30,100,71,35,46,112,6,60,110]))