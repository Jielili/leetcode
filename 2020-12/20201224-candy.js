/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let ans = [],
        size = ratings.length,
        count = 0,
        step = 1,
        p = 0;
    for (let i = 0; i < size; i += step) {
        if ((i == 0 || ratings[i] <= ratings[i - 1]) && (i == size - 1 || ratings[i] <= ratings[i + 1])) {
            ans[i] = 1;
            count += ans[i];
        } else if ((ans[i - 1] && ratings[i] > ratings[i - 1]) && (ans[i + 1] && ratings[i] > ratings[i + 1])) {
            ans[i] = Math.max(ans[i - 1], ans[i + 1]) + 1;
            count += ans[i];
        } else if (ans[i - 1] && ratings[i] > ratings[i - 1] && (i == size - 1 || ratings[i] <= ratings[i + 1])) {
            ans[i] = ans[i - 1] + 1;
            count += ans[i];
        } else if (ans[i + 1] && ratings[i] > ratings[i + 1] && (i == 0 || ratings[i] <= ratings[i - 1])) {
            ans[i] = ans[i + 1] + 1;
            count += ans[i];
        }
        if (step == 1 && ans[i] && i > 0 && !ans[i - 1]) {
            p = i;
            step = -1;
        } else if (ans[i] && (i == 0 || ans[i - 1]) && (ans[i + 1])) {
            i = p;
            step = 1;
        }
    }
    console.log(ans);
    return count;
};

console.log(candy([1, 2, 2]));