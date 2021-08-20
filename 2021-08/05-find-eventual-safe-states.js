/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const res = [];
    let pre = 0;
    graph = graph.map((item, i) => [i,item])
    while (true) {
        const len = res.length
        for (let i = 0; i < graph.length; ) {
            for (let j = pre; j < len; j++){
                const item = res[j]
                if (graph[i][1].includes(item)) {
                    graph[i][1].splice(graph[i][1].indexOf(item), 1)
                }
            }
            if (graph[i][1].length === 0) {
                res.push(graph[i][0])
                graph.splice(i,1)
            } else {
                i++
            }
        }
        if (res.length === len) {
            break;
        }
        pre = len;
    }
    return res.sort((a, b) => a - b)
};

console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))