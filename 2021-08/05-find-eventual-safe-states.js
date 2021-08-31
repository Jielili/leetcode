/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const n = graph.length;
    const indeg = graph.map(item => item.length)
    const rg = new Array(n).fill(0).map(() => [])
    const res = []
    graph.forEach((dists, start) => {
        dists.forEach(dist => {
            rg[dist].push(start)
        })
    })
    const queue = []
    indeg.forEach((item, i) => {
        if (item === 0) {
            queue.push(i)
        }
    })
    while (queue.length > 0) {
        const start = queue.shift()
        res.push(start)
        rg[start].forEach(dist => {
            indeg[dist]--
            if (indeg[dist] === 0) {
                queue.push(dist)
            }
        })
    }
    return res.sort((a, b) => a - b)
};

console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))