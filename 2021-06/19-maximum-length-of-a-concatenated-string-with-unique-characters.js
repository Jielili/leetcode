/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {

  const codes = [];
  const init = 'a'.charCodeAt();

  for (let word of arr) {
    let code = 0;
    for (let m = 0; m < word.length; m++) {
      if (((code >> (word.charCodeAt(m) - init)) & 1) === 0) {
        code = code | (1 << (word.charCodeAt(m) - init));
      } else {
        code = 0;
        break;
      }
    }
    codes.push(code);
  }

  const getLen = (i, code) => {
    if (i === arr.length - 1) {
      if (codes[i] === 0 || (code & codes[i]) !== 0) {
        return 0;
      } else {
        return arr[i].length;
      }
    }

    if (codes[i] === 0 || (code & codes[i]) !== 0) {
      return getLen(i + 1, code);
    }

    return Math.max(getLen(i + 1, code), arr[i].length + getLen(i + 1, code | codes[i]))
  }

  return getLen(0, 0);
};

console.log(maxLength(
  ["abcdefghijklmnopqrstuvwxyz"]))