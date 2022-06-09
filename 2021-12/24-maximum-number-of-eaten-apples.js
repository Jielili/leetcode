// 苹果会腐烂，必须尽早吃完，所以当天有苹果能吃就吃苹果
// 有苹果吃，吃最不新鲜的那个，就是会尽快腐烂的那个

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  const len = apples.length;
  let dayCanEatApples = -1;
  let res = 0;
  for (let i = 0; i < len; i++){
    const dayI = Math.min(apples[i], days[i])
    const prepareMoveTo = dayI + Math.max(dayCanEatApples, i-1)
    if (prepareMoveTo > dayCanEatApples) {
      res += prepareMoveTo - Math.max(dayCanEatApples, i-1)
      dayCanEatApples = prepareMoveTo
    }
  }
  return res
};
// console.log(eatenApples([2,1,10],
//   [2,10,1]))
// console.log(eatenApples([3,0,0,0,0,2],[3,0,0,0,0,2]))
console.log(eatenApples([1,2,3,5,2],[3,2,1,4,2]))