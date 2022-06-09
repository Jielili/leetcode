// 广度优先探索

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const get = (status) => {
    const res = [];
    for (let item of bank) {
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
  if (!bank.includes(end)) {
    return -1;
  }

  // let step = 0;
  // const queue = [start];
  // const seen = new Set();
  // seen.add(start);

  let step = [0, 0];
  const queue = [[start], [end]];
  const seen = [new Set(), new Set()];
  seen[0].add(start);
  seen[1].add(end);



  while (queue.length > 0) {
    step++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const status = queue.shift();
      const nextStatus = get(status);
      for (let item of nextStatus) {
        if (!seen.has(item)) {
          if (item === end) {
            return step;
          }
          queue.push(item);
          seen.add(item);
        }
      }
    }
  }

  return -1;
};


console.log(minMutation("AAAAACCC",
"AACCCCCC",
["AAAAAACC","AAAACCCC","AAACCCCC","AACCCCCC"]))