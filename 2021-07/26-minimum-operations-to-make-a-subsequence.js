/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function (target, arr) {
    const reg = new RegExp(target.join('|'), 'g')
    const req = (arr.join('').match(reg)).map(item => target.indexOf(Number(item)));
    const max = [], len = req.length;
    const dp = new Array(len).fill(0).map((item, i) => new Map())
    req.forEach((item, i) => {
        dp[len - 1].set(item, req[len - 1] > item ? 1 : 0)
    })
    dp[len - 1].set(-1, 1);
    for (let i = len - 2; i >= 0; i--) {
        for (let item of req) {
            dp[i].set(item, Math.max((1 + dp[i + 1].get(item), dp[i + 1].get(Min(-1,)))))
        }
    }
    return req;
};

console.log(minOperations([6, 4, 8, 1, 3, 2], [4, 7, 6, 2, 3, 8, 6, 1]))