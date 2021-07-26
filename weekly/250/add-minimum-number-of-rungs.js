/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function (rungs, dist) {
    rungs.unshift(0);
    let count = 0;
    for (let i = 0; i < rungs.length - 1; i++) {
        const diff = rungs[i + 1] - rungs[i];
        if (diff <= dist) {
            continue;
        }
        count += (Math.floor(diff / dist) - (diff % dist === 0 ? 1 : 0))
    }
    return count;
};
console.log(addRungs([3], 1))