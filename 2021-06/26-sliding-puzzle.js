/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {

  const target = '123450'
  const init = board[0].join('') + board[1].join('');
  if (init === target) {
    return 0;
  }
  const queue1 = [init],
    queue2 = [target];
  const seen1 = new Map(),
    seen2 = new Map();
  seen1.set(init, 0);
  seen2.set(target, 0);
  let step = [0,0]

  const get = (status) => {
    const res = [];
    const trans = {
      0: [1, 3],
      1: [0, 4, 2],
      2: [1, 5],
      3: [4, 0],
      4: [3, 1, 5],
      5: [4, 2],
    }
    const i = status.indexOf('0') + '';
    for (let d of trans[i]) {
      const a = status.split('');
      [a[i], a[d]] = [a[d], a[i]];
      res.push(a.join(''))
    }
    return res;
  }

  const update = (queue, seen, index) => {
    step[index]++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const status = queue.shift();
      const nextStatus = get(status);
      for (let item of nextStatus) {
        if (!seen.has(item)) {
          if (item === target) {
            return step[index];
          }
          queue.push(item);
          seen.set(item,step[index]);
        }
      }
    }
    return -1;
  }

  while (queue1.length > 0 && queue2.length > 0) {
    let step = -1;
    if (queue1.length <= queue2.length) {
      step = update(queue1, seen1, 0)
    } else {
      step = update(queue2, seen2, 1);
    }
    if(step !== -1){
      return step;
    }
  }

  return -1;
};


console.log(slidingPuzzle([[3,2,4],[1,5,0]]))