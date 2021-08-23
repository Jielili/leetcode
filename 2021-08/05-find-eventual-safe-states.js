/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const n = graph.length;
    const rg = new Array(n).fill(0).map(() => new Array());
    const res = [];
    let pre = 0;
    for (let x = 0; x < n; ++x) {
        for (let y of graph[x]) {
            rg[y].push(x);
        }
        if (graph[x].length === 0) {
            res.push(x)
        }
    }
    while (true) {
        const len = res.length
        for (let j = pre; j < len; j++){
            const dist = res[j]
            rg[dist].forEach(item => {
                graph[item].splice(graph[item].indexOf(dist), 1)
                if (graph[item].length === 0) {
                    res.push(item)
                }
            })
        }
        if (res.length === len) {
            break;
        }
        pre = len;
    }
    return res.sort((a, b) => a - b)
};

console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))