/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function (neededApples) {
    let sum = 0, i = 0, pre = 0;
    while (sum * 4 < neededApples) {
        i++;
        pre = pre + i * 2 - 1 + (i - 1) * 2 + i * 2
        sum += pre;
    }

    return i * 8;
};

console.log(minimumPerimeter(60))