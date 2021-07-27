/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let [left, right, len, type] = [0, -1, 0, 'single']
    const obj = {}
    let stringLength = 0,
        maxLetter = '',
        max = 0
    while (right < s.length - 1) {

        if (type == 'double') {
            const leftLetter = s[left]
            obj[leftLetter]--
            left++
            if (maxLetter == leftLetter) {
                max--
                for(let i in obj){
                    if(obj[i]>max){
                        max = obj[i]
                        maxLetter = i
                    }
                }
            }
        } else {
            stringLength++
        }

        right++
        const rightLetter = s[right]
        obj.hasOwnProperty(rightLetter) ? (obj[rightLetter]++) : (obj[rightLetter] = 1)

        if(maxLetter == rightLetter){
            max++
        }else if(obj[rightLetter]>max){
            max = obj[rightLetter]
            maxLetter = rightLetter
        }

        if (stringLength - max <= k) {
            len = Math.max(len, stringLength)
            type = 'single'
        } else {
            type = 'double'
        }
    }
    return len
};


console.log(characterReplacement("ABAB", 2))