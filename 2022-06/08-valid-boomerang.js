/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const dx1 = points[0][0] - points[1][0],
    dx3 = points[0][0] - points[2][0],
    dx2 = points[1][0] - points[2][0],
    dy1 = points[0][1] - points[1][1],
    dy3 = points[0][1] - points[2][1],
    dy2 = points[1][1] - points[2][1]
  if ((!dx1 && !dy1) || (!dx2 && !dy2) || (!dx3 && !dy3)) {
    return false
  }
  if (dx1 / dy1 === dx2 / dy2 || dx1 / dy1 === dx3 / dy3 || dx2 / dy2 === dx3 / dy3) {
    return false
  }
};