/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let [left, right, len, sum, type, max] = [0, -1, 0, 0, 'single', 0];
    while (right < A.length - 1) {
        right++
        A[right] == 1 && sum++

        if (type == 'double') {
            A[left] == 1 && sum--
            left++
        } else {
            len++
        }

        if (len - sum <= K) {
            type = 'single'
            max = Math.max(len, max)
        } else {
            type = 'double'
        }
    }
    return max
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))