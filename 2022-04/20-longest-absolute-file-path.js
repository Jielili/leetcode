/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let res = 0, pre = []
  const arr = input.split('\n').map(a => a.split('\t'))
  arr.forEach(a => {
    let path = []
    a.forEach((b,i) => {
      path.push(b || pre[i])
      if (b.indexOf('.') >= 0) {
        res = Math.max(res,path.join('/').length)
      }
    })
    pre = path
  })
  return res
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"))
console.log(lengthLongestPath("a"))
console.log(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt"))