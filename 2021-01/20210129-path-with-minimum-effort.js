/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    const [rows, columns] = [heights.length, heights[0].length || 0];
    const map = new Array(rows).fill(0).map(val => new Array(columns).fill(-1));
    const BFS = function (i, j, dire) {
        if (dire != 1 && i > 0 && (map[i][j] < map[i - 1][j] || map[i - 1][j] == -1)) {
            const choice = Math.max(map[i][j], Math.abs(heights[i - 1][j] - heights[i][j]));
            if (map[i - 1][j] == -1 || choice < map[i - 1][j]) {
                map[i - 1][j] = choice;
                BFS(i - 1, j, 3);
            }
        }
        if (dire != 2 && j < columns - 1 && (map[i][j] < map[i][j + 1] || map[i][j + 1] == -1)) {
            const choice = Math.max(map[i][j], Math.abs(heights[i][j + 1] - heights[i][j]));
            if (map[i][j + 1] == -1 || choice < map[i][j + 1]) {
                map[i][j + 1] = choice;
                BFS(i, j + 1, 4);
            }
        }
        if (dire != 3 && i < rows - 1 && (map[i][j] < map[i + 1][j] || map[i + 1][j] == -1)) {
            const choice = Math.max(map[i][j], Math.abs(heights[i + 1][j] - heights[i][j]));
            if (map[i + 1][j] == -1 || choice < map[i + 1][j]) {
                map[i + 1][j] = choice;
                BFS(i + 1, j, 1);
            }
        }
        if (dire != 4 && j > 0 && (map[i][j] < map[i][j - 1] || map[i][j - 1] == -1)) {
            const choice = Math.max(map[i][j], Math.abs(heights[i][j - 1] - heights[i][j]));
            if (map[i][j - 1] == -1 || choice < map[i][j - 1]) {
                map[i][j - 1] = choice;
                BFS(i, j - 1, 2);
            }
        }
    }
    map[0][0] = 0;
    BFS(0, 0, -1);
    return map[rows - 1][columns - 1];
};






console.log(minimumEffortPath([[1,10,6,7,9,10,4,9]]));