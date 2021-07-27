/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  // const dp = new Array(coins + 1).fill(0)
  // dp[0] = 0;

  // for (let i = 1; i < coins + 1; i++) {
  //   for (let j = 0; j < costs.length; j++) {

  //   }
  // }
  costs.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] > coins) {
      break;
    }
    count++;
    coins -= costs[i]
  }
  return count;

};

console.log(maxIceCream([1, 3, 2, 4, 1]))