/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = new Array(n).fill(0).map(() => ({
    next: [],
    not: -1,
    cost: Number.POSITIVE_INFINITY
  }))
  flights.forEach(([from, to, price]) => {
    graph[from].next.push([to, price])
  })
  // return DFS(graph, src, dst, k)
  graph[src].cost = 0
  BFS(graph, [src], dst, k)
  // return t>=Number.POSITIVE_INFINITY? -1: t
  return graph[dst].cost >= Number.POSITIVE_INFINITY ? -1 : graph[dst].cost
};

var DFS = function (graph, src, dst, k) {
  let cost = -1
  if (k < 0 || k <= graph[src].not) {
    return -1
  }

  graph[src].next.forEach(([mid, price]) => {
    if (mid === dst) {
      cost = Math.min(cost === -1 ? Number.POSITIVE_INFINITY : cost, price)
    } else {
      const t = DFS(graph, mid, dst, k - 1)
      if (t > 0) {
        cost = Math.min(cost === -1 ? Number.POSITIVE_INFINITY : cost, price + t)
      }
    }
  })
  if (cost === -1) {
    graph[src].not = Math.max(graph[src].not, k)
  } else {
    graph[src].cost.push(k, cost)
  }
  return cost
}

var BFS = function (graph, src, dst, k) {

  // graph[src].cost = cost
  // if (src !== dst) {
  //   graph[src].next.forEach(([mid, price]) => {
  //     const x = cost + price
  //     if (x < graph[mid].cost) {
  //       BFS(graph, mid, dst, k - 1, x)
  //     }
  //   })
  // }
  while (src.length > 0) {
    if (k < 0) {
      return
    }
    const len = src.length
    for (let i = 0; i < len; i++) {
      const start = src.shift()
      if (start !== dst) {
        const cost = graph[start].cost
        graph[start].next.forEach(([mid, price]) => {
          const x = cost + price
          if (x < graph[mid].cost) {
            graph[mid].cost = x
            src.push(mid)
          }
        })
        k--
      }
    }
  }

};


// console.log(
//   findCheapestPrice(
//     4,
//     [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]],
//     0,
//     3,
//     1
//   )
// );

console.log(
  findCheapestPrice(
    4,
    [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]],
    0,
    3,
    1
  )
);

