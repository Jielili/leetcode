/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const m = points.length, n = points[0].length;
    for (let i = 1; i < m; i++) {
        const pre = points[i - 1];
        for (let j = 0; j < n; j++) {
            const cur = points[i][j];
            for (let x = 0; x < n; x++) {
                points[i][j] = Math.max(points[i][j],cur + pre[x] - Math.abs(x - j))
            }
        }
    }

    return points[m - 1].sort((a, b) => a - b)[n - 1]
};

console.log(maxPoints( [[1,5],[2,3],[4,2]]))