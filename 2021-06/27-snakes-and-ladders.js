/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const n = board.length;
  const target = n * n;
  let step = 0;
  const queue = [1];
  const seen = new Set();
  const trans = (location) => {
    const rowReverse = Math.floor((location - 1) / n);
    const row = n - rowReverse - 1;
    let col = (location - 1) % n;
    if (rowReverse % 2 !== 0) {
      col = n - col - 1;
    }
    return {
      row,
      col
    };
  }

  const get = (location) => {
    const res = [];
    for (let i = 1; i <= 6; i++) {
      const next = location + i;
      if (next > target) {
        break;
      }
      const {
        row,
        col
      } = trans(next);
      const val = board[row][col];
      if (val === -1) {
        res.push(next)
      } else {
        res.push(val)
      }
    }
    return res;
  }
  while (queue.length > 0) {
    const len = queue.length;
    step++;
    for (let i = 0; i < len; i++) {
      const location = queue.shift();
      const nextLocation = get(location);
      for (let item of nextLocation) {
        if (!seen.has(item)) {
          if (item === target) {
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

var snakesAndLadders1 = function (board) {
  const n = board.length;
  const target = n * n;
  let step = 0;
  const queue1 = [1],
    queue2 = [target];
  const seen1 = new Map(),
    seen2 = new Map();
  const trans = (location) => {
    const rowReverse = Math.floor((location - 1) / n);
    const row = n - rowReverse - 1;
    let col = (location - 1) % n;
    if (rowReverse % 2 !== 0) {
      col = n - col - 1;
    }
    return {
      row,
      col
    };
  }

  const get = (location) => {
    const res = [];
    for (let i = 1; i <= 6; i++) {
      const next = location + i;
      if (next > target) {
        break;
      }
      const {
        row,
        col
      } = trans(next);
      const val = board[row][col];
      if (val === -1) {
        res.push(next)
      } else {
        res.push(val)
      }
    }
    return res;
  }

  while (queue1.length > 0 && queue2.length > 0) {
    step++;
    const len1 = queue1.length,
      len2 = queue2.length;
    for (let i = 0; i < len1; i++) {
      const location = queue1.shift();
      const nextLocation = get(location);

      for (let item of nextLocation) {
        if (!seen1.has(item)) {
          if (seen2.has(item)) {
            return seen1.get(item) + seen2.get(item);
          }
          queue1.push(item);
          seen1.set(item, step);
        }
      }
    }

    for (let i = 0; i < len2; i++) {
      const location = queue2.shift();
      const nextLocation = get(location);
      for (let item of nextLocation) {
        if (!seen2.has(item)) {
          if (seen1.has(item)) {
            return seen1.get(item) + seen2.get(item);
          }
          queue2.push(item);
          seen2.set(item, step);
        }
      }
    }
  }

  return -1;
};


console.log(snakesAndLadders1(
  [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1]
  ]
))