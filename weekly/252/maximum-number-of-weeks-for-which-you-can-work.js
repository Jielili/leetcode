/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
    let max = 0;
    const sum = milestones.reduce((acc, cur) => {
        max = Math.max(max, cur)
        return acc + cur
    }, 0)

    // console.log(sum, max)
    if (2 * max > sum + 1) {
        return 2 * sum - 2 * max + 1;
    } else {
        return sum
    }
};

console.log(numberOfWeeks([5, 2, 1]))