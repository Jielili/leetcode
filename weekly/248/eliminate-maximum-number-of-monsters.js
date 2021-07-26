/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
    const time = dist.map((item, i) => {
        return Math.ceil(item / speed[i])
    })

    time.sort((a, b) => a-b)

    let n = 0;

    for (let i = 0; i < time.length; i++) {
        if (i < time[i]) {
            n++
        } else {
            break
        }
    }
    return n
};


console.log(eliminateMaximum([4, 3, 4],
    [1, 1, 2]))