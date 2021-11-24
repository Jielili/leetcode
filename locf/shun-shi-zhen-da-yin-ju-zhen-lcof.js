/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return []
  }
  let i = 0, j = 0;
  const dir = ['r', 'd', 'l', 'u'];
  const vlen = matrix.length, hlen = matrix[0].length;
  let count = 0
  const len = vlen * hlen;
  const res = []
  while (res.length < len) {
    let cur = dir[count % 4]
    res.push(matrix[i][j])
    const diff = Math.floor((count+1)/4) 
    if (cur === 'r' && j === hlen - 1 -diff) {
      count++
    } else if (cur === 'd' && i === vlen - 1 - diff) {
      count++
    } else if (cur === 'l' && j === 0 + diff) {
      count++
    } else if (cur === 'u' && i === 0 + diff) {
      count++
    }
    cur = dir[count % 4]
    if (cur === 'r') {
      j++
    } else if (cur === 'd') {
      i++
    } else if (cur === 'l') {
      j--
    } else {
      i--
    }
  }

  return res
};

console.log(spiralOrder([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]))