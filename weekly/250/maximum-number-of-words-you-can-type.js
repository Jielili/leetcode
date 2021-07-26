/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const broken = brokenLetters.split('');
    const word = text.split(/\s+/);
    const len = broken.length;
    return word.reduce((acc, cur) => {
        for (let i = 0; i < len; i++) {
            if (cur.indexOf(broken[i]) >= 0) {
                return acc;
            }
        }
        return acc + 1;
    }, 0)
};

console.log(canBeTypedWords("leet code", "e"))