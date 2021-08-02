/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            res++;
        }
        if (res > 3) {
            break;
        }
    }

    return res === 3;
};

console.log(isThree(4))