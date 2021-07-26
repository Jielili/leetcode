/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const sort = strs.map(item => {
        return item.split('').sort().join('')
    })
    const res = new Map();
    strs.forEach((item, index) => {
        const co = sort[index]
        if (!res.has(co)) {
            res.set(co, []);
        }
        res.get(co).push(item)
    })
    return [...res.values()]
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))