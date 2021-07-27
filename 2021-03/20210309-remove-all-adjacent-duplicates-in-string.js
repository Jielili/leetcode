/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates1 = function (S) {
    let [letter, count, arr] = ['', 0, S.split('')];
    for (let i = 0; i < arr.length; i++) {
        if (count === 2) {
            arr.splice(i - count, count);
            i-=2;
            [letter, count] = ['', 0];
            if(arr[i]===arr[i-1]){
                i--;
            }
        }
        if (arr[i] !== letter) {
            letter = arr[i];
            count = 1;
        } else {
            count++;
        }

    }
    if (count == 2) {
        arr.splice(arr.length - count, count);
    }
    return arr.join('');
};


var removeDuplicates = function (S) {
};




console.log(removeDuplicates("abbaca"));