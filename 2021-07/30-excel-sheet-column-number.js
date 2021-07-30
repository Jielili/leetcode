/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const num = columnTitle.split('');

  let sum = 0, level = 1;

  while (num.length > 0) {
    const cur = num.pop();
    sum += level * (cur.charCodeAt() - 64)
    level *= 26;
  }

  return sum;
};

console.log(titleToNumber(''))