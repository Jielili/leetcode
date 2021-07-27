/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  const len = deliciousness.length,
    mod = (1e+9) + 7;
  let res = 0;
  const pow = [];
  for (let i = 0; i <= 21; i++) {
    pow.push(Math.pow(2, i))
  }
  const map = new Map();
  for (let i = 0; i < len; i++) {
    for (let target of pow) {
      const diff = target - deliciousness[i];
      if (map.has(diff)) {
        res = (res + map.get(diff)) % mod
      }
    }
    if (!map.has(deliciousness[i])) {
      map.set(deliciousness[i], 0)
    }
    map.set(deliciousness[i], map.get(deliciousness[i]) + 1)
  }
  return res;
};

console.log(countPairs([1,3,5,7,9]))