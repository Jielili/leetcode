/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
    const lineX = [Math.min(0, target[0]), Math.max(0, target[0])], lineY = [Math.min(0, target[1]), Math.max(0, target[1])]
    const len = ghosts.length
    for (let i = 0; i < len; i++) {
        const [x, y] = ghosts[i]
        if (Math.abs(x - target[0]) + Math.abs(y - target[1]) <= Math.abs(target[0]) + Math.abs(target[1])) {
            return false
        }
    }
    return true
}

console.log(escapeGhosts([[-5, 2], [1, 2], [1, 2], [0, 3], [0, 3]],
    [-2, 1]))