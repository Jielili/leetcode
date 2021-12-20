// 供暖器

// 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

// 找出每个房屋相邻的两个供暖器，取最小值，这个值就是这个房屋需要供暖的最小半径
// 在每个房屋需要供暖最小半径中取最大值，这样就能保证每个房屋都能供暖


/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  let res = 0, i = 0, j = 0;
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  const housesLen = houses.length, heatersLen = heaters.length;
  while (i < housesLen) {
    while (heaters[j] < houses[i] && j < heatersLen) {
      j++
    }
    if (j > 0 && j < heatersLen) {
      res = Math.max(res,Math.min(heaters[j]-houses[i],houses[i]-heaters[j-1]))
    } else if (j > 0) {
      res = Math.max(res,houses[i]-heaters[j-1])
    } else {
      res = Math.max(res,heaters[j]-houses[i])
    }
    i++
  }
  return res
};

console.log(findRadius([282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923],
  [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]))