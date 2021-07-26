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
    let step = 0;
    const queue = [init];
    const seen = new Set();
    seen.add(init);

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

    while (queue.length > 0) {
        step++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const status = queue.shift();
            const nextStatus = get(status);
            for (let item of nextStatus) {
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

console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]]))

