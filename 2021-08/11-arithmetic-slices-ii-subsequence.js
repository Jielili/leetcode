/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    const len = nums.length
    const map = new Map()
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            const diff = nums[j] - nums[i]
            let sum = 0;
            let pre = nums[j]
            for (let k = j + 1; k < len; k++) {
                if (nums[k] - pre === diff) {
                    sum++;
                    pre = nums[k]
                }
            }
            if (sum > 0) {
                if (!map.has(diff)) {
                    map.set(diff, 0)
                }
                if (diff === 0) {
                    let m = sum, i = m - 1, x = 2;
                    while (i > 0) {
                        m = m * i / x
                        sum += m
                        i--;
                        x++;
                    }
                }
                map.set(diff, map.get(diff) + sum)
            }
        }
    }

    let res = 0;
    [...map.values()].forEach(item => {
        res += item
    })
    return res;
};

console.log(numberOfArithmeticSlices([7, 7, 7, 7, 7]))