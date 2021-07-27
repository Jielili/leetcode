/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  const split = formula.match(/([A-Z][a-z]?)|\d+|\(|\)/g)
  const count = new Map();
  const multipliers = [1];
  let multiplier = 1;
  while (split.length > 0) {
    const item = split.pop();
    const ascii = item.charCodeAt(0)
    if (ascii >= 48 && ascii <= 57) { //数字
      multiplier = Number(item)
    } else if (ascii === 41) { //右括号
      multipliers.push(multipliers[multipliers.length - 1] * multiplier)
      multiplier = 1;
    } else if (ascii === 40) {
      multipliers.pop()
    } else {
      if (!count.has(item)) {
        count.set(item, 0)
      }
      count.set(item, count.get(item) + multiplier * multipliers[multipliers.length - 1])
      multiplier = 1;
    }
  }

  return [...count.keys()].sort().map(item => '' + item + (count.get(item) === 1 ? '' : count.get(item))).reduce((acc, cur) => acc + cur, '');

};

console.log(countOfAtoms("H2O"))
console.log(countOfAtoms("Mg(OH)2"))
console.log(countOfAtoms("K4(ON(SO3)2)2"))
console.log(countOfAtoms("Be32"))