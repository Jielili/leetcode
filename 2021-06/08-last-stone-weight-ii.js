/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const sum = stones.reduce((a,b)=>a+b,0);
  const negF = Math.floor(sum/2);
  let len = stones.length;arr = new Array(negF+1).fill(0);
  for(let i = 1; i< len+1;i++){
    const item = stones[i-1]
    for(let j = negF; j>= item; j--){
      arr[j] = Math.max(arr[j],arr[j-item]+item)
    }
  }
  return sum-2*arr[negF]
};

console.log(lastStoneWeightII([2,7,4,1,8,1]))


