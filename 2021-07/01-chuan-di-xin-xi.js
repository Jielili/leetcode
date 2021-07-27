/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays1 = function (n, relation, k) {
  const relationMap = new Map();
  relation.forEach(item => {
    const [start, end] = item;
    if (!relationMap.has(item[0])) {
      relationMap.set(item[0], []);
    }
    relationMap.get(start).push(end);
  })
  if (!relationMap.has(0)) {
    return 0;
  }
  const cur = [0];
  for (let i = 0; i < k; i++) {
    const len = cur.length;
    for (let j = 0; j < len; j++) {
      const start = cur.shift();
      cur.splice(cur.length, 0, ...(relationMap.get(start) || []));
    }
  }
  return cur.reduce((pre, curr) => {
    return pre + (curr === n - 1 ? 1 : 0)
  }, 0)
};


var numWays2 = function (n, relation, k) {
  let ways = 0;
  const edges = new Array(n).fill(0).map(() => [])
  relation.forEach(item => {
    edges[item[0]].push(item[1])
  })
  const dfs = (index, step) => {
    if (step === k) {
      index === n - 1 && ways++;
      return;
    }
    edges[index].forEach(item => {
      dfs(item, step + 1)
    })

  }
  dfs(0, 0)
  return ways;

};


var numWays = function (n, relation, k) {
  const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < k; i++) {
    for (const [src, dst] of relation) {
      dp[i + 1][dst] += dp[i][src];
    }
  }
  return dp[k][n - 1];
};


console.log(numWays(5, [
  [0, 2],
  [2, 1],
  [3, 4],
  [2, 3],
  [1, 4],
  [2, 0],
  [0, 4]
], 3))