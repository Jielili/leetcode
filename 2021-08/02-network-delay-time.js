/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const map = new Map();
  times.forEach(([u,v,t]) => {
    if (!map.has(u)) {
      map.set(u,[])
    }
    map.get(u).push([v,t])
  })
  const time = new Array(n + 1).fill(-1)
  time[0] = 0;
  time[k] = 0;
  bfs(time, map, k, 0)
  // console.log(time)
  if (time.includes(-1)) {
    return -1;
  }

  return time.sort((a,b)=>b-a)[0]
};


// var dfs = function (time, map, k, pre) {
//   (map.get(k) || []).forEach(([v, t]) => {
//     if (time[v] === -1 || time[v]>pre+t) {
//       time[v] = pre + t;
//       dfs(time,map,v,time[v])
//     }
//   })
// }
var bfs = function (time, map, k, pre) {
  const res = [];
  (map.get(k) || []).forEach(([v, t]) => {
    if (time[v] === -1 || time[v]>pre+t) {
      time[v] = pre + t;
      res.push(v)
    }
  })
  res.forEach(v => {
    bfs(time,map,v,time[v])
  })
}


console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,2]],
  3,
  1))