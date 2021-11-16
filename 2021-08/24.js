/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const graph = new Array(n).fill(0).map(() => [])
    flights.forEach(([from, to, price]) => {
        graph[from].push([to, price])
    })
    const t = DFS(graph, src, dst, k)
    return t >= Number.POSITIVE_INFINITY ? -1 : t
};

var DFS = function (graph, src, dst, k) {
    let cost = Number.POSITIVE_INFINITY
    if (k < 0) {
        return Number.POSITIVE_INFINITY
    }
    graph[src].forEach(([mid, price]) => {
        if (mid === dst) {
            cost = Math.min(cost, price)
        } else {
            cost = Math.min(cost, price + DFS(graph, mid, dst, k - 1))
        }
    })
    return cost
}

var BFS = function (n, graph, srcs, dst, k) {
    const ans = new Array(n).fill(0)
    while(srcs.length>0 && k+1>0){
        const len = srcs.length
        for(let i = 0;i<len;i++){
            
        }
    }
}

console.log(findCheapestPrice(
    4,
    [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]],
    0,
    3,
    1
))