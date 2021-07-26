/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const len = s.length;
    const map = new Map();
    for (let i = 0; i < len; i++) {
        const start = s[i];
        if (map.has(start)) {
            continue
        }
        const endIndex = s.lastIndexOf(start);
        if (i === endIndex) {
            map.set(start, 0)
            continue;
        }
        const mid = new Set(s.substring(i + 1, endIndex).split('')).size;
        map.set(start, mid)
    }

    return [...map.entries()].reduce((acc, curr) => acc + curr[1], 0)
};

console.log(countPalindromicSubsequence("bbcbaba"))