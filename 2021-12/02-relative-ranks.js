/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const rank = [...score]
  rank.sort((a, b) => b - a)
  const len = score.length
  for (let i = 0; i < len; i++){
    const x = rank.indexOf(score[i])
    score[i] = x===0?'Gold Medal':(x===1?'Silver Medal':(x===2?'Bronze Medal':`${x+1}`))
  }
  return score
};

console.log(findRelativeRanks([10,3,8,9,4]))