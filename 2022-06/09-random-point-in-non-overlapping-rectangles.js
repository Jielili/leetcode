/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.points = []
  this.count = 0
  rects.forEach(item => {
    const count = (item[2]-item[0]+1) * (item[3]-item[1]+1)
    this.points.push({
      p: item,
      count
    })
    this.count += count
  })
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  const random = Math.floor(Math.random() * this.count) + 1
  let p = 0, rest = random
  while (rest - this.points[p].count > 0) {
    rest -= this.points[p].count
    p++
  }
  const points = this.points[p].p
  const x = points[2] - points[0] + 1
  return [points[0]+(rest-1)%x, points[3]-Math.floor((rest-1)/x)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

const a = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]])

console.log(a.pick())