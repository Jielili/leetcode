/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const get = (status) => {
        const res = [];
        for (let item of wordList) {
            let diff = 0;
            for (let i = 0; i < status.length; i++) {
                if (status[i] !== item[i]) {
                    diff++;
                }
            }
            diff === 1 && res.push(item);
        }
        return res;
    }
    if (!wordList.includes(endWord)) {
        return 0;
    }

    let step = 1;
    const queue = [beginWord];
    const seen = new Set();
    seen.add(beginWord);

    while (queue.length > 0) {
        step++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const status = queue.shift();
            const nextStatus = get(status);
            for (let item of nextStatus) {
                if (!seen.has(item)) {
                    if (item === endWord) {
                        return step;
                    }
                    queue.push(item);
                    seen.add(item);
                }
            }
        }
    }

    return 0;


};

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]));
