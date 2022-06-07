/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1, high = 0;
  piles.forEach(v => {
    if (v > high) {
      high = v
    }
  })
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const time = getTime(piles, mid)
    if (time <= h) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return low
};

const getTime = (piles, speed) => {
  let res = 0;
  piles.forEach(v => {
    res += Math.ceil(v/speed)
  })
  return res
}


console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))
console.log(minEatingSpeed([3,6,7,11], 8))