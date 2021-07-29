/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let cur = 2, level = 1;
  while (label>=cur) {
    level++;
    cur *= 2;
  }

  const res = [];

  while (label !== 1) {
    res.push(label)
    // if (level % 2 === 0) {
      const start = Math.pow(2, level - 1)
      const end = start * 2 - 1;
      diff = label - start;
      label = end - diff;
    // }
    label = Math.floor(label / 2)
    level--
  }

  res.push(1)

  return res.reverse();
};

console.log(pathInZigZagTree(26))