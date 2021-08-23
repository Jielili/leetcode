/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const n = graph.length;
    const rg = new Array(n).fill(0).map(() => new Array());
    const res = [],queue = []
    for (let x = 0; x < n; ++x) {
        for (let y of graph[x]) {
            rg[y].push(x);
        }
        if (graph[x].length === 0) {
            queue.push(x)
        }
    }
    while (queue.length > 0) {
        const dist = queue.shift()
        res.push(dist)
        rg[dist].forEach(item => {
            graph[item].splice(graph[item].indexOf(dist), 1)
            if (graph[item].length === 0) {
                queue.push(item)
            }
        })
    }
    return res.sort((a, b) => a - b)
};

console.log(eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]]))