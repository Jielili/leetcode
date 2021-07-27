/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (target === '0000') {
    return 0;
  }
  if (deadends.includes(target) || deadends.includes('0000')) {
    return -1;
  }
  const queue1 = ['0000'],
    queue2 = [target];
  const seen1 = new Map(),
    seen2 = new Map();
  seen1.set('0000', 0);
  seen2.set(target, 0);
  let step1 = 0,
    step2 = 0;

  const nextV = (val) => {
    return (val + 1) % 10;
  }

  const preV = (val) => {
    const pre = val - 1;
    return pre === -1 ? 9 : pre;
  }

  const get = (status) => {
    const res = [];
    for (let i = 0; i < 4; i++) {
      const letter = Number(status[i]);
      const start = status.substring(0, i);
      const end = status.substring(i + 1);
      res.push(start + nextV(letter) + end);
      res.push(start + preV(letter) + end);
    }
    return res;
  }

  console.log('queue1', JSON.stringify(queue1));
  console.log('queue2', JSON.stringify(queue2));
  while (queue1.length > 0 && queue2.length > 0) {
    const len1 = queue1.length,
      len2 = queue2.length;
    if (len1 <= len2) {
      step1++;
      for (let i = 0; i < len1; i++) {
        const status = queue1.shift();
        const nextStatus = get(status);
        for (let item of nextStatus) {
          if (!seen1.has(item) && !deadends.includes(item)) {
            if (seen2.has(item)) {
              console.log(item);
              return step1 + seen2.get(item);
            }
            queue1.push(item);
            seen1.set(item, step1);
          }
        }
      }
      console.log('queue1', JSON.stringify(queue1));
    } else {
      step2++;
      for (let i = 0; i < len2; i++) {
        const status = queue2.shift();
        const nextStatus = get(status);
        for (let item of nextStatus) {
          if (!seen2.has(item) && !deadends.includes(item)) {
            if (seen1.has(item)) {
              console.log(item);
              return seen1.get(item) + step2;
            }
            queue2.push(item);
            seen2.set(item,step2);
          }
        }
      }
      console.log('queue2', JSON.stringify(queue2));
    }
  }
  return -1;
};

console.log(openLock(["1301", "0113", "0202", "0122", "3012", "0131", "0200", "0203", "1232", "0222"], '2311'))