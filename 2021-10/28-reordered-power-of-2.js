/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const len = String(n).length;
  const options = [];
  let cur = 1;
  while (String(cur).length <= len) {
    if (String(cur).length === len) {
      options.push(cur)
    }
    cur *= 2;
  }

  const a = String(n).split('').sort().join('')

  for (let i = 0; i < options.length; i++){
    const compare = String(options[i]).split('').sort().join('');
    if (compare === a) {
      return true
    }
  }

  return false
};

console.log(reorderedPowerOf2(46))